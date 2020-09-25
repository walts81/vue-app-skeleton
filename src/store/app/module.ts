import { factories } from '../module-factory';
import { moduleName, getDefaultState, types } from './module-data';
import toggleBusy from './actions/toggle-busy';

export default () => {
  const module = factories.moduleFactory(moduleName, getDefaultState());

  factories.actionFactory(module, types.actions.toggleBusy, (ctx, payload) => toggleBusy(ctx, payload));
  factories.mutationFactory(module, types.mutations.setAppBusy, (state, payload) => (state.isBusy = payload));
  factories.getterFactory(module, types.getters.isAppBusy, state => state.isBusy);
  return module;
};
