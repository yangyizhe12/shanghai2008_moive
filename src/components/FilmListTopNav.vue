<template>
    <div>
        <div class="titleTop">
            <div class="ListTop">
                <router-link to="/City" tag="span">{{cityName}}</router-link> 
                
                <!-- this.$store.state.city -->
            </div> 
            <span class="word">电影列表</span>
        </div>      
        <nav>
            <ul>
                <router-link tag="li" to="/film/nowplaying" active-class="active">
                    <span>正在热映</span>
                </router-link>
                <router-link tag="li" to="/film/comingsoon" active-class="active">
                    <span>即将上映</span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
import $ from 'jquery';
import cityName from '../views/city/City';

export default {
    data(){
        return{
            cityName:{},
        }
    },
    mounted(){
        this.getXy();
    },
    
    methods: {
        getXy: function () {
            var localtion={};
            // 通过百度api获得经纬度
            $.getJSON("https://api.map.baidu.com/location/ip?callback=?", {
                'ak' : 'lApvxfMWyOB9So5CZUOupRGg7wLYlbGx',
                'coor' : 'bd09ll',
                'ip' : localtion.ip
            },(data) => {
                localtion.address = data.content.address //位置
                // this.cityName = JSON.stringify(data.content)
                    // this.cityName = localtion.address
                // console.log(this)
                // console.log( this.cityName)
                // console.log(localtion.point)
                console.log(this.$store.state.city)
                if(this.$store.state.city == '' ){
                    this.cityName = localtion.address
                    this.$store.state.city = this.cityName       
                }else{
                    this.cityName = this.$store.state.city               
                }
            });
        },
    }
    
    
}
</script>
<style lang="scss" scoped>
.titleTop{
    height: 40px;
    // background-color: red;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
}
.word{
    position: relative;
    left: 40%;
}
.ListTop{
    
        position: absolute;
        top: 6px;
        left: 7px;
        color: #fff;
        z-index: 10;
        font-size: 13px;
        background: rgba(0,0,0,.2);
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        padding: 0 5px;
        
}
nav {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    ul {
        display: flex;
        text-align: center;
        li {
            flex: 1;
            display: flex;
            justify-content: center;
            &.active {
                span {
                    width: 40%;
                    border-bottom: 2px solid red;
                    display: block;
                    color: #fe5100;
                }
            }
        }
    }
}
</style>