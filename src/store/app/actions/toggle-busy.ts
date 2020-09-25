import { ActionContext } from '../../action-context';
import { AppState, types } from '../module-data';

let counter = 0;

export default (ctx: ActionContext<AppState>, isBusy: boolean) => {
  return new Promise<any>(resolve => {
    if (isBusy) {
      counter++;
    } else if (counter > 0) {
      counter--;
    }

    const isActuallyBusy = counter > 0;
    if (isActuallyBusy !== ctx.state.isBusy) {
      ctx.commit(types.mutations.setAppBusy, isActuallyBusy);
    }
    resolve();
  });
};
