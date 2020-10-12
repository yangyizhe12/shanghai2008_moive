<template>
    <div>
        <FilmListTopNav :class="fixed ? 'fixed' : ''" />
        <router-view/>
    </div>
</template>

<script>
import FilmListTopNav from '@/components/FilmListTopNav'
export default {
    data(){
        return {
            fixed:false
        }
    },
    components:{
        FilmListTopNav
    },
    mounted(){
        window.addEventListener("scroll",(e)=>{
            let top = document.documentElement.scrollTop;
            // console.log(top)
            if(top > 150){
                this.fixed = true
            }else{
                this.fixed = false
            }
        },true);
    },
    filters:{
        parseActors :function(value){
            let actors = '';
            value.forEach(element => {
                actors += element.name + " "
            });
            return actors
        }
    }
}
</script>
<style lang="scss" scoped>
.fixed {
    position: fixed;
    top: 0;
    background: #ffffff;
}
</style>