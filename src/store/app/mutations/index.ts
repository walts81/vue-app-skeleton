import { AppState } from '../state';
import mutationTypes from './types';

export default {
  [mutationTypes.setAppBusy]: (state: AppState, isBusy: boolean) => (state.isBusy = isBusy),
};
