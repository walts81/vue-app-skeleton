export interface ActionContext<State, RootState = any> {
  dispatch: <T, TResult = any>(action: string, payload?: T) => Promise<TResult>;
  commit: <T>(mutation: string, payload?: T) => void;
  getters: { [key: string]: any };
  state: State;
  rootState: RootState;
  rootGetters: { [key: string]: any };
}
