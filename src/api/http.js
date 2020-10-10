import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://m.maizuo.com';

axios.interceptors.request.use(
    function(config){
        let host = "";
        let info = config.headers.info;
        if("info" == info){
            host = 'mall.film-ticket.film.info'
        }
        if("cinema" == info){
            host = 'mall.film-ticket.cinema.list'
        }
        if("city" == info){
            host = 'mall.film-ticket.city.list'
        }else{
            host = "mall.film-ticket.film.list";
        }
        config.headers = {
            "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022367182884122078871554","bc":"310100"}',
            "X-Host":host,
        }
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
);

export default axios;