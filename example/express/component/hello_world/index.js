'use strict';

import Vue from 'vue';
import vueFileRendererClientPlugin from '../../../../dist/plugin';
import HelloWord from './hello_world.vue';

Vue.use(vueFileRendererClientPlugin);
const app = new Vue(HelloWord);
app.$mount('#app');
