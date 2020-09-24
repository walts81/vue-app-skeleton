import { Store } from 'vuex';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $theStore: Store<import('./store/root-state').RootState>;
  }
}
