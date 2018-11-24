import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// Font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faDownload, faSquare, faBed, faBath, faBuilding, faAd, faCheck, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as VueGoogleMaps from 'vue2-google-maps';


import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB4zoOi_AiJ6y_c459Aica5WXmnQc31xq4',
  },
});

// Font awesome icons config
library.add(faBars, faDownload, faSquare, faBed, faBath, faBuilding, faAd, faCheck, faMapMarker);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
