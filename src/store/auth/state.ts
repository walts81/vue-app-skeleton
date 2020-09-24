import { User, getDefaultUser } from './models';

export interface AuthState {
  currentUser: User;
  token: string;
}

export default (): AuthState => ({
  currentUser: getDefaultUser(),
  token: '',
});
