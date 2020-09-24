import { ActionContext } from '../../action-context';
import { getDefaultUser } from '../models';
import { AuthState } from '../state';
import types from '../types';

export default (ctx: ActionContext<AuthState>) => {
  return new Promise<any>(resolve => {
    ctx.commit(types.mutations.setCurrentUser, getDefaultUser());
    ctx.commit(types.mutations.setAuthToken, '');
    resolve();
  });
};
