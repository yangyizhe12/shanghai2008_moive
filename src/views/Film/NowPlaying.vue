<template>
    <div>
        <h1>影片中心</h1>
    </div>
</template>
<script>
import {nowPlayingListData} from '@/api/api'
export default {
    data(){
        return {
            page:1,
            list:[]
        }
    },
    async mounted(){
        let ret = await nowPlayingListData(this.page);
        this.list = ret.data.data.film
    }
}
</script>
