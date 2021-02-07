export default {
    path:'/movie',
    component: () => import("@/views/movie"),
    children: [
        {
            path: 'city',
            component: () => import("@/views/movie/city")
        },
        {
            path: 'hot',
            component: () => import("@/views/movie/hot")
        },
        {
            path: 'coming',
            component: () => import("@/views/movie/coming")
        },
        {
            path: 'search',
            component: () => import("@/views/movie/search")
        },
        {
            path: '',
            redirect: 'hot'   
        },

    ]
        
    
}