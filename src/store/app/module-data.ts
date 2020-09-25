const moduleName = 'app';

interface AppState {
  isBusy: boolean;
}

const getDefaultState = (): AppState => ({
  isBusy: false,
});

const types = {
  actions: {
    toggleBusy: `${moduleName}_toggle_busy`,
  },
  mutations: {
    setAppBusy: `${moduleName}_set_app_busy`,
  },
  getters: {
    isAppBusy: `${moduleName}_is_app_busy`,
  },
};

export { moduleName, AppState, getDefaultState, types };
