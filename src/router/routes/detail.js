export default {
    path: "/film/:filmId",
    name: "detail",
    component: () => import('@/views/detail/Detail')
};