import { ActionContext } from './action-context';

interface VuexModule<State = any> {
  name: string;
  actions: { [key: string]: any };
  mutations: { [key: string]: any };
  getters: { [key: string]: any };
  state: State;
}

const moduleFactory = <State>(name: string, state: State): VuexModule<State> => {
  return {
    name,
    actions: {},
    mutations: {},
    getters: {},
    state,
  };
};

const actionFactory = <State, Payload = any, Result = any>(
  module: VuexModule<State>,
  name: string,
  action: (ctx: ActionContext<State>, payload?: Payload) => Promise<Result>
) => {
  module.actions[name] = action;
};

const mutationFactory = <State, Payload = any>(
  module: VuexModule<State>,
  name: string,
  mutation: (state: State, payload?: Payload) => void
) => {
  module.mutations[name] = mutation;
};

const getterFactory = <State, Result = any>(
  module: VuexModule<State>,
  name: string,
  getter: (state: State) => Result
) => {
  module.getters[name] = getter;
};

const factories = {
  moduleFactory,
  actionFactory,
  mutationFactory,
  getterFactory,
};

export { VuexModule, factories };
