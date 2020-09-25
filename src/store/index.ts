import { Store } from 'vuex';
import { RootState, vuexTypes } from './root/module-data';

let storeInstance: Store<RootState> | null = null;

const setStore = (store: Store<RootState>) => {
  storeInstance = store;
};

const getStore = () => {
  return storeInstance;
};

export { setStore, getStore, RootState, vuexTypes };
