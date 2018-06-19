import Home from './components/Home.vue'
import Header from './components/Header.vue'

/**the constant name "User" matches the User component name defined below
 * require.ensure is webpack syntax the ensure that the file is only loaded
 * if it is needed. Webpack will create a bundle for each of these components
 * and load them lazally. The last param passed to require.ensure will make
 * webpack bundle components using those files together.
 */ 
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user')
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
}

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
}

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
}

/**"/:<some text>" this indicates to vue that this is the extra data that 
 * will be added to the url so that it can navigate to that page
 * If you place "/" in your child route you will get something.com/<child route>
 * Leaveing the path blank will append it to the parent route url: something.com/user/<child name>
 */
export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', components: {
        default: User,  // this defines the main component
        'header-bottom': Header  // this will append the header component at the "<router-view></router-view>" markup
    }, children: [
        { path: '', component: UserStart },  // something.com/<something>
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup')
            next()
        } },  // something.com/10
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }  // something.com/10/edit
    ] },
    { path: '/redirect-me', redirect: { name: 'home' } },  // when the path defined is added to the url it will redirect to "home"
    { path: '*', redirect: '/' }  // if anything that is not a ligitimate route is entered the page will redirect to the home page
]
