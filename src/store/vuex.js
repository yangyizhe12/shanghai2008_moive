import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        city:'',
        _token: "",
    },
    mutations: {
        updateToken: function(state, _token) {
            state._token = _token;
            localStorage.setItem("_token", _token);
        },
        setCity: function(state, cityName) {
            state.city = cityName;
        },
    },
    actions:{

    },
    getters:{
        
    }
})