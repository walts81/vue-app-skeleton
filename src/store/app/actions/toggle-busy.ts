import { ActionContext } from '../../action-context';
import { AppState } from '../state';
import mutationTypes from '../mutations/types';

let counter = 0;

export default (ctx: ActionContext<AppState>, isBusy: boolean) => {
  return new Promise(resolve => {
    if (isBusy) {
      counter++;
    } else if (counter > 0) {
      counter--;
    }

    const isActuallyBusy = counter > 0;
    if (isActuallyBusy !== ctx.state.isBusy) {
      ctx.commit(mutationTypes.setAppBusy, isActuallyBusy);
    }
    resolve();
  });
};
