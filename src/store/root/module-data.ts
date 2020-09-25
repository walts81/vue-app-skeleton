import { AppState, getDefaultState as getDefaultAppState, types as appTypes } from '../app/module-data';
import { AuthState, getDefaultState as getDefaultAuthState, types as authTypes } from '../auth/module-data';

interface RootState {
  app: AppState;
  auth: AuthState;
}

const getDefaultState = (): RootState => ({
  app: getDefaultAppState(),
  auth: getDefaultAuthState(),
});

const vuexTypes = {
  actions: {
    app: appTypes.actions,
    auth: authTypes.actions,
  },
  mutations: {
    app: appTypes.mutations,
    auth: authTypes.mutations,
  },
  getters: {
    app: appTypes.getters,
    auth: authTypes.getters,
  },
};

export { RootState, getDefaultState, vuexTypes };
