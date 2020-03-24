import Vue from 'vue';
import Vuex from 'vuex';
import homeModel from './models/index.model';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        homeModel
    }
});

export default store;