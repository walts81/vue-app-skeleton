import app from '../app/vuex-module';
import auth from '../auth/vuex-module';
import { VuexModule } from '../module-factory';

export default (): { [key: string]: VuexModule } => {
  return {
    app: app(),
    auth: auth(),
  };
};
