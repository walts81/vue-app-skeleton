import { Store } from 'vuex';
import { RootState } from './root/state';
import types from './root/types';

let storeInstance: Store<RootState> | null = null;

const setStore = (store: Store<RootState>) => {
  storeInstance = store;
};

const getStore = () => {
  return storeInstance;
};

export { setStore, getStore, RootState, types };
