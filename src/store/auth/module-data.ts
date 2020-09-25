import { User, getDefaultUser } from './models';

const moduleName = 'app';

interface AuthState {
  currentUser: User;
  token: string;
}

const getDefaultState = (): AuthState => ({
  currentUser: getDefaultUser(),
  token: '',
});

const types = {
  actions: {
    login: `${moduleName}_login`,
    logout: `${moduleName}_logout`,
  },
  mutations: {
    setCurrentUser: `${moduleName}_set_current_user`,
    setAuthToken: `${moduleName}_set_auth_token`,
  },
  getters: {
    isAuthenticated: `${moduleName}_is_authenticated`,
    authToken: `${moduleName}_auth_token`,
    currentUser: `${moduleName}_current_user`,
  },
};

export { moduleName, AuthState, getDefaultState, types };
