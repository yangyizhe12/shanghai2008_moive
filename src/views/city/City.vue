<template>
    <div>
        <van-index-bar :index-list = "indexList" >
            <template v-for="( item , index ) in dataList">
                <van-index-anchor :index="item.index" :key="index"  />
                <van-cell 
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
import "vant/lib/index.css";


Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
    data(){
        return{
            dataList:[],
            indexList:[]
        }
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
            console.log(cityName)
        }
    }

};
</script>
<style>
</style>