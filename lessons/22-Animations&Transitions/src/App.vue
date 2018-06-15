<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br>
                <br>
                <!-- you can only use one element within the transition component. 
                Adding the fade paramenter in the name attribute will allow vue js 
                to add its animation support to this componenet by sniffing css 
                styles starting with the defined name attribute, in this case 
                "fade". -->
                <transition v-bind:name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                <!-- adding animation to the type attribute ensures that the element 
                is removed after the animation is finished. -->
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                <!-- to tell vue js to animate the initial entering of the DOM the appear 
                attribute is used. -->
                <transition name="fade" appear>
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                <!-- To use external stylesheets the vue class extensions for transitions 
                can be used like this. Note that the appear attribute will not work when 
                assigning the transition class attributes. -->
                <transition
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake">
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>
                <!-- they key attribute will ensure that vue js does not simply change the 
                contained div from one to the other but instead renders one and does not 
                render the other. The "mode" attribute with the one of two parameters 
                of "out-in" or "in-out" will allow the element to play its animation 
                or transition will play out before it renderes in the other element.
                "in-out" will first render the second element in before it renders the first 
                out. -->
                <transition v-bind:name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br>
                <br>
                <!-- The event listers below will be used to perform animations/transitions via 
                JavaScript rather then with css. Note ":css="false" will ensure that vue will not look 
                for any css classes, use this if you plan on only using javascript to change styling. -->
                <transition 
                    v-on:before-enter="beforeEnter" 
                    @enter="enter" 
                    @after-enter="afterEnter" 
                    @enter-cancelled="enterCancelled"
                    
                    @before-leave="beforeLeave" 
                    @leave="leave" 
                    @after-leave="afterLeave" 
                    @leave-cancelled="leaveCancelled"
                    :css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="switchComponent()">Toggle Alerts</button>
                <br>
                <br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponenet"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br>
                <br>
                <!-- Below is an example of transition group, items in a transition group always need 
                to be keyed or you'll run into errors. -->
                <ul class="list-group">
                    <transition-group name="slide">
                        <li class="list-group-item" style="cursor: pointer;"
                            v-for="(number, index) in numbers" 
                            :key="number" 
                            @click="removeItem(index)">{{ number }}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert'
    import SuccessAlert from './SuccessAlert'

    export default {
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        },
        data() {
            return {
                show: false,
                load: false,
                alertAnimation: 'fade',
                selectedComponenet: 'app-success-alert',
                elementWidth: 100,
                numbers: [1,2,3,4,5]
            }
        },
        methods: {
            switchComponent() {
                if (this.selectedComponenet == 'app-success-alert') {
                    this.selectedComponenet = 'app-danger-alert'
                } else {
                    this.selectedComponenet = 'app-success-alert'
                }
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length)
                this.numbers.splice(pos, 0, this.numbers.length + 1)
            },
            removeItem(index) {
                this.numbers.splice(index, 1)
            },
            beforeEnter(el) {
                console.log('beforeEnter')
                this.elementWidth = 100
                el.style.width = this.elementWidth + 'px'
            },
            enter(el, done) {
                console.log('enter')
                let round = 1
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px'
                    round++;
                    if (round > 20) {
                        clearInterval(interval)
                        done()  // done will tell vue when the animation/transition is finished. Useful for async tasks
                    }
                }, 20)
            },
            afterEnter(el) {
                console.log('afterEnter')
            },
            enterCancelled(el) {
                console.log('enterCancelled')
            },
            beforeLeave(el) {
                console.log('beforeLeave')
                this.elementWidth = 300
                el.style.width = this.elementWidth + 'px'
            },
            leave(el, done) {
                console.log('leave')
                let round = 1
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px'
                    round++;
                    if (round > 20) {
                        clearInterval(interval)
                        done()  // done will tell vue when the animation/transition is finished. Useful for async tasks
                    }
                }, 20)
            },
            afterLeave(el) {
                console.log('afterLeave')
            },
            leaveCancelled(el) {
                console.log('leaveCancelled')
            }
        }
    }
</script>

<style>
    /* here fade is the name tied to the name atribute of the transition component so 
    all of the classes will start with "fade" followed by the vue class extension: 
    *-enter, *-enter-actvite, *-leave, *-leave-active  */ 
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {
        /* opacity: 1; <-- this is already the default opacity for this class */
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    /* The slide class prefix is identical to that of the name attribute in the 
    second transition commponent. */
    .slide-enter {
        opacity: 0;
        /* since the starting position of the animation is does not change for the 
        first frame this does not need any class properties */
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave {
        /* since the starting position of the animation is does not change for the 
        first frame this does not need any class properties the default opacity 
        will be 1 there for setting it to one is pointless. */
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute; /* this style is nessesary so that the dom allows elements to move above while they are animated */
    }
    /* this animation is avalible for the moving of items in the dom */
    .slide-move {
        transition: transform 1s;
    }
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        } to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0px);
        } to {
            transform: translateY(20px);
        }
    }
</style>
