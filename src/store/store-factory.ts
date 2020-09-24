import Vue from 'vue';
import { Store } from 'vuex';
import createModules from './root/vuex-modules';
import { RootState } from './root/state';
import vuex from './vuex-plugin';
import { setStore } from './index';

let store: Store<RootState> | null = null;

export default (forceCreateNew = false): Store<RootState> => {
  if (!store) {
    Vue.use(vuex);
    const modules = createModules();
    store = new Store({
      modules,
    });
    setStore(store);
  } else if (forceCreateNew) {
    const modules = createModules();
    const names = Object.keys(modules);
    names.forEach(x => store?.unregisterModule(x));
    names.forEach(x => store?.registerModule(x, modules[x]));
  }
  return store;
};
