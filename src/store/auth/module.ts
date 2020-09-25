import { factories } from '../module-factory';
import login from './actions/login';
import logout from './actions/logout';
import { moduleName, getDefaultState, types } from './module-data';

export default () => {
  const module = factories.moduleFactory(moduleName, getDefaultState());
  factories.actionFactory(module, types.actions.login, (ctx, payload) => login(ctx, payload));
  factories.actionFactory(module, types.actions.logout, ctx => logout(ctx));
  factories.mutationFactory(module, types.mutations.setAuthToken, (state, payload) => (state.token = payload));
  factories.mutationFactory(module, types.mutations.setCurrentUser, (state, payload) => (state.currentUser = payload));
  factories.getterFactory(module, types.getters.authToken, state => state.token);
  factories.getterFactory(module, types.getters.isAuthenticated, state => !!state.currentUser.id && !!state.token);
  factories.getterFactory(module, types.getters.currentUser, state => state.currentUser);
  return module;
};
