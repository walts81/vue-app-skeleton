import Vue from 'vue';
import { Store } from 'vuex';
import modules from './vuex-modules';
import myVuex from '../plugins/vuex';

Vue.use(myVuex);

export default new Store({
  modules,
});
