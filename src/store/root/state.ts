import getDefaultAppState, { AppState } from '../app/state';
import getDefaultAuthState, { AuthState } from '../auth/state';

export interface RootState {
  app: AppState;
  auth: AuthState;
}

export default (): RootState => ({
  app: getDefaultAppState(),
  auth: getDefaultAuthState(),
});
