import app from '../app/module';
import auth from '../auth/module';
import { VuexModule } from '../module-factory';

export default (): { [key: string]: VuexModule } => {
  return {
    app: app(),
    auth: auth(),
  };
};
