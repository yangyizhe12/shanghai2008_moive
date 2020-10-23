export default {
        path: "/cinema/:cinemaId" ,
        name: "cinemaDetail",
        component: () => import('@/views/detail/cinemaDetail')

};