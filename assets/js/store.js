import Vue from 'vue';
import Cart from './mixins/Cart';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  mixins: [Cart],
});
