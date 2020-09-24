import app from '../app/types';
import auth from '../auth/types';

export default {
  actions: {
    app: app.actions,
    auth: auth.actions,
  },
  mutations: {
    app: app.mutations,
    auth: auth.mutations,
  },
  getters: {
    app: app.getters,
    auth: auth.getters,
  },
};
