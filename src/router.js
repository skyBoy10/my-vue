import Vue from 'vue';
import Router from 'vue-router';
import indexRoutes from './routers/index.route';

Vue.use(Router);

const routes = [
    ...indexRoutes
];

export default new Router({
    routes
});