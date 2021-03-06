import Vue from 'vue';
import Glider from './components/Glider.vue';
import GliderSlide from './components/GliderSlide.vue';
import VueCookies from 'vue-cookies';
import Cart from './mixins/Cart';

Vue.use(VueCookies);

Vue.component(Glider.name, Glider);
Vue.component(GliderSlide.name, GliderSlide);

new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  mixins: [Cart],
});
