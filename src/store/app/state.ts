export interface AppState {
  isBusy: boolean;
}

export const getDefaultState = (): AppState => ({
  isBusy: false,
});
