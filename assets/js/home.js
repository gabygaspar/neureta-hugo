import Vue from 'vue';
import Glider from './components/Glider.vue';
import GliderSlide from './components/GliderSlide.vue';

Vue.component(Glider.name, Glider);
Vue.component(GliderSlide.name, GliderSlide);

new Vue({
  el: '#app',
});