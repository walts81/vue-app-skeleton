import prefix from './module-name';

export default {
  actions: {
    toggleBusy: `${prefix}_toggle_busy`,
  },
  mutations: {
    setAppBusy: `${prefix}_set_app_busy`,
  },
  getters: {
    isAppBusy: `${prefix}_is_app_busy`,
  },
};
