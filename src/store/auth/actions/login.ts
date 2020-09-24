import { ActionContext } from '../../action-context';
import { AuthState } from '../state';
import types from '../types';

export default (ctx: ActionContext<AuthState>, payload: { username: string; password: string }) => {
  return new Promise<any>(resolve => {
    // todo - call api for login
    ctx.commit(types.mutations.setCurrentUser, {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      username: payload.username,
    });
    ctx.commit(types.mutations.setAuthToken, 'gobbledeegook');
    resolve();
  });
};