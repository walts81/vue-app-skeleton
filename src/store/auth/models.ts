export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
}

export const getDefaultUser = (): User => ({
  id: '',
  firstName: '',
  lastName: '',
  username: '',
});
