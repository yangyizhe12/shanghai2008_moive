<template>
    <div>
        <div class="titleTop">
            <div class="ListTop">
                <router-link to="/City" tag="span">{{cityName}}</router-link> 
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
import cityName from '../views/city/City'
export default {
    data(){
        return{
            cityName:"",
        }
    },
    mounted:function(){
        // this.createcode()
        // this.showPosition(position)
    },
    methods: {
        // createcode : function() {
        //     if (navigator.geolocation){
        //     navigator.geolocation.getCurrentPosition(showPosition);
        //     }else{
        //     x.innerHTML="Geolocation is not supported by this browser.";
        //     }
        // },showPosition: 
        // function (position){
        //     x.innerHTML="Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
        // }
    },
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