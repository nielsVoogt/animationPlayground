<template>
    <div id="app">
         <router-link to="/">Go to Home</router-link>
         <router-link to="/cards">Go to Cards</router-link>

         <router-view></router-view>
    </div>
</template>


<script>


export default {
  name: 'app',
  data () {
    return { }
  }
}
</script>

<style lang="scss">
  @import './styles/app.scss';
</style>