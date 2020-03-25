<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            transitionName: 'slide-right'
        };
    },
    watch: {
        '$route' () {
            if (this.$route.isleft) {
                this.transitionName = 'slide-right';
                return;
            }

            this.transitionName = 'slide-right';
        }
    }
}
</script>

<style lang='less'>
@import './base.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
