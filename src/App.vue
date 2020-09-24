<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <transition name="fade">
      <div class="spinner-overlay" v-if="isBusy"></div>
    </transition>
    <transition name="fade">
      <spinner v-if="isBusy"></spinner>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import spinner from './components/spinner.vue';
import { types } from './store';

// let counter = 0;

@Component({
  components: {
    spinner,
  },
})
export default class App extends Vue {
  get isBusy() {
    return this.$theStore.getters[types.getters.app.isAppBusy];
  }

  // mounted() {
  //   const h = setInterval(() => {
  //     if (counter > 20) {
  //       clearInterval(h);
  //     } else {
  //       this.$theStore.dispatch(types.actions.app.toggleBusy, !this.isBusy);
  //       counter++;
  //     }
  //   }, 5000);
  // }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .spinner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.66;
    background: #000;
  }
  .spinner {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
