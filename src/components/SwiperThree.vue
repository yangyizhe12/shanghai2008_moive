<template>
    <div class="swiper-container">
        <div class="swiper-Progress">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
    data() {
        return {
        swiperOption: {
          // spaceBetween: 30, //板块间距
          loop: true, //无缝轮播
          centeredSlides: true,
          autoplay: {  //自动轮播
            delay: 3000,
            disableOnInteraction: false,
            },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            paginationClickable: false,
            paginationType: 'custom',
             }
            }
        }
    },
    
    mounted() {
        this.$nextTick(() => {
        new Swiper(".swiper-Progress", { slidesPerView: 4 });
        });
    },
};
</script>