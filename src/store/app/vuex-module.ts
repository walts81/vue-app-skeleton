import { getDefaultState } from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default {
  state: getDefaultState(),
  actions,
  mutations,
  getters,
};
