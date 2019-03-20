
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;
window.Axios = require('axios').default;

import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);

import Vue from 'vue'
import VCharts from 'v-charts'

Vue.use(VCharts)

window.Axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

import VueRouter from 'vue-router';
import axios  from 'axios';


Vue.use(VueRouter, axios);



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import ArticulosLista from './components/articulos/ArticulosLista.vue'
import ArticulosChart from './components/articulos/ArticulosChart.vue'

const routes = [{
    path: '/',
    components: {
        ArticulosLista: ArticulosLista
    },    
},

    {
        path: '/articulos/lista',
        component: ArticulosLista,
        name: 'articuloslista'
    },
    {
        path: '/articulos/chart',
        component: ArticulosChart,
        name: 'articuloschart'
    },

];

const router = new VueRouter({ routes });
const EventBus = new Vue();
const app = new Vue({ router }).$mount('#app');



