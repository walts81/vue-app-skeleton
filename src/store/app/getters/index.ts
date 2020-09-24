import { AppState } from '../state';
import getterTypes from './types';

export default {
  [getterTypes.isAppBusy]: (state: AppState) => state.isBusy,
};
