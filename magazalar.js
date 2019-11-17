import Vue from 'vue'
import VueSlideBar from 'vue-slide-bar'
 
Vue.component('VueSlideBar', VueSlideBar)


require("dotenv").config();

import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: { key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY }
});