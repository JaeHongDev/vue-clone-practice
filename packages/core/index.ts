import Vue from "./instance/index";
import { initGlobalAPI } from "./global-api/index";
import { isServerRendering } from 'core/util/env';
import {FunctionalRenderContext } from 'core/vdom/create-functional-component';
import {version} from 'v3';

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer',{
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext',{
  get() {
  }
})

Vue.version = version;

export default Vue;


