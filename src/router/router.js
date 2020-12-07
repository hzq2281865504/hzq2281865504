import Vue from 'vue';

import VueRouter from 'vue-router'
import Layout from "@/components/Layout";
import ListView from "@/views/List/ListView";
import FirstView from "@/views/First/FirstView";
Vue.use(VueRouter);


export default new VueRouter({     // 导出router模块
    routes: [
        {
            path: '/',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '/ListView',
                    name: 'ListView',
                    component: ListView
                },
                {
                    path: '/FirstView',
                    name: 'FirstView',
                    component: FirstView
                }
            ]
        }
    ]
})