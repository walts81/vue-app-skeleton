import prefix from './module-name';

export default {
  actions: {
    login: `${prefix}_login`,
    logout: `${prefix}_logout`,
  },
  mutations: {
    setCurrentUser: `${prefix}_set_current_user`,
    setAuthToken: `${prefix}_set_auth_token`,
  },
  getters: {
    isAuthenticated: `${prefix}_is_authenticated`,
    authToken: `${prefix}_auth_token`,
    currentUser: `${prefix}_current_user`,
  },
};
