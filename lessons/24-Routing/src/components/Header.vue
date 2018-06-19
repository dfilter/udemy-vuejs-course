<template>
    <!-- The "to" attribute indicates the route to which vue js will navigate when this item is clicked.
    The "tag" attribute indicates that this item will be rendered as an li element.
    The "active-class" attribute is used to add classes to the element when it is the active page or route.
    The "exact" attribute indicates that the url needs to be exactly "/" in order for it to route to the 
    correct page.  -->
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
    </ul>
</template>
