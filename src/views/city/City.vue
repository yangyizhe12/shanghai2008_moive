<template>
    <div>
        <van-index-bar :index-list = "indexList">
            <van-search class="search"
                v-model="value" 
                show-action 
                placeholder="请输入城市" 
                @search="onSearch"
                @cancel="onCancel"
            />
            <template v-for="( item , index ) in dataList" class="dataList">
                <van-index-anchor :index="item.index" :key="index" style="background:#eee;"/>
                <van-cell style="font-size:16px;"
                    @click="chooseCity(sub.name)"  
                    v-for="(sub,key) in item.data"
                    :title="sub.name"
                    :key="key"
                />

            </template>
        </van-index-bar>
    </div>
</template>

<script>
import Vue from "vue";
import { cityListData } from "@/api/api";
import { IndexBar, IndexAnchor, Cell } from "vant";
import { Search } from 'vant';
import { Toast } from 'vant';
import "vant/lib/index.css";


Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(Search);
export default {
    data(){
        return{
            dataList:[],
            indexList:[],
            value: ''
        }
    },
    mounted() {
        // 1. state直接获取对应的数据值
        
        console.log(this.$store.state.city);
    },
    created(){
        this.eventBus.$emit('footerNav' , false)
    },
    beforeDestroy(){
        this.eventBus.$emit('footerNav' , true)
    },
    async mounted() {
        let ret = await cityListData();
        this.dataList = ret[0]
        this.indexList = ret[1]
    },
    methods:{
        chooseCity : function (cityName){
            this.$store.commit('setCity',cityName);
            this.$router.go(-1);
            console.log(cityName)
        },
        onSearch(val) {
            Toast(val);
        },
        onCancel() {
            Toast('取消');
            this.$router.go(-1);
        }
    }

};
</script>
<style>

</style>