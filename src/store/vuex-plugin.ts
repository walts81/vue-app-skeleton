import _Vue from 'vue';
import Vuex from 'vuex';

function applyMixin() {
  const t: any = this as any;
  Object.defineProperty(t, '$theStore', {
    get: function() {
      return t.$store;
    },
  });
}

_Vue.use(Vuex);

export default (Vue: typeof _Vue) => {
  Vue.mixin({ beforeCreate: applyMixin });
};
