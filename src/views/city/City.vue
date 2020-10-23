<template>
    <div>
        <van-index-bar :index-list = "indexList">
            <van-search class="search"
                v-model="value" 
                show-action
                placeholder="请输入城市" 
                @search="onSearch"
                @cancel="onCancel"
                v-on:keyup.enter="search"
                v-on:input ="inputFunc"
            />
            <ul>
                <li class="ele"  v-for="ele in newList" :key="ele"  @click="choose(ele)">{{ele}}</li>
            </ul>
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
import { IndexBar, IndexAnchor, Cell, List } from "vant";
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
            value: '',
            List:[],
            newList:[]
        }
    },
    mounted() {
        // 1. state直接获取对应的数据值
        console.log(this.$store.state.city); 
    },
    created(){
        this.eventBus.$emit('footerNav' , false)
        this.ListTwo = this.List;
    },
    beforeDestroy(){
        this.eventBus.$emit('footerNav' , true)
    },
    async mounted() {
        let ret = await cityListData();
        this.dataList = ret[0]
        this.indexList = ret[1]
        //城市列表
        var cityList = []
        function list(){
            ret[0].forEach((item,index)=>{
                item.data.forEach((e,k)=>{
                    cityList.push(e.name)
                })
            })
        }
        list()
        // console.log(cityList);
        this.List = cityList
        console.log(this.List);
    },
    methods:{
        chooseCity : function (cityName){
            this.$store.commit('setCity',cityName);
            this.$router.go(-1);
            // console.log(cityName)
        },
        onSearch(value) {
            Toast(value);

            // val= this.value;
            // console.log(this.value);
            //精确查询
            if (this.List.indexOf(value) >= 0) {
                // console.log('有')
                this.$store.state.city = value
                console.log(this.$store.state.city);
                this.$router.go(-1);
            }else{
                Toast('暂无您所查询的城市');
            }

            //模糊查询
            // for( let i = 0;i<= (this.List).length;i++){
            //     if(this.List[i]){
            //         if ((this.List[i]).indexOf(val) > -1) {
            //             (this.newList).push(this.List[i])
            //         }
            //     }
            // }
            // console.log(this.newList);
        },
        onCancel() {
            Toast('取消');
            this.$router.go(-1);
        },
        fuzzy_search(){
            for( let i = 0;i<= (this.List).length;i++){
                if(this.List[i]){
                    if ((this.List[i]).indexOf(this.value) > -1) {
                        (this.newList).push(this.List[i])
                    }
                }
            }
            // console.log(this.newList);
        },
        inputFunc:function(){
            if(this.value != null){
                this.fuzzy_search();
                // this.$router.go(-1);
                if(this.value == ''){
                    this.newList=[]
                }
            }
        },
        choose(ele){
            console.log(ele);
            this.$store.state.city = ele
            // console.log(this.$store.state.city);
            this.$router.go(-1);
        }
    }

};
</script>
<style>
.ele{
    color: #323233;
    font-size: 14px;
    line-height: 24px;
}
</style>
