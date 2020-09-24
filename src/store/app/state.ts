export interface AppState {
  isBusy: boolean;
}

export default (): AppState => ({
  isBusy: false,
});
