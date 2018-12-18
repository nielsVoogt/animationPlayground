
<template>
    <div id="app">
        <router-link to="/">Go to Home</router-link>
        <router-link to="/cards">Go to Cards</router-link>

        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>

import anime from 'animejs';

export default {
    name: 'app',
    data () {
        return { }
    },
    methods: {

    }
}
</script>

<style lang="scss">

    @import './styles/app.scss';

    // Looks like poo, make better
    
    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }
    
</style>