import Vue from 'vue';
import VueCookies from 'vue-cookies';
import Cart from './mixins/Cart';

Vue.use(VueCookies);

new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  mixins: [Cart],
});
