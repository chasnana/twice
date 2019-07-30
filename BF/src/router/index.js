import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '@/components/Route/home'
import heart from '@/components/Route/heart'
import search from '@/components/Route/search'
import shopcar from '@/components/Route/shopcar'
import mianfei from '@/components/Route/mianfei'
import kefu from '@/components/Route/kefu'
import pz from '@/components/Route/pz'
import zslb from '@/components/Route/zslb'
import jd from '@/components/Route/jd'
import xg from '@/components/Route/xg'
import zc from  '@/components/Route/zc'
import dll from  '@/components/Route/dll'
import gw from '@/components/Route/gw'
import sc from '@/components/Route/sc'
import onpage from '@/components/Route/onpage'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
    path:"*",
    redirect:"/home"
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      meta:{isLogin:true},
      component: shopcar
    },
    
    {
      path: '/heart',
      name: 'heart',
      component: heart
    },
    
    {
      path: '/kefu',
      name: 'kefu',
      component: kefu
    },
    
    {
      path: '/pz',
      name: 'pz',
      component: pz
    },
    
    {
      path: '/zslb',
      name: 'zslb',
      component: zslb
    },
    
    {
      path: '/jd',
      name: 'jd',
      component: jd
    },
    
    {
      path: '/xg',
      name: 'xg',
      component: xg
    },
    
    {
      path: '/zc',
      name: 'zc',
      component: zc
      
    }
    ,
    
    {
      path: '/sc',
      name: 'sc',
      component: sc
    },
    {
    	path:"/gw",
    	name:"gw",
    	component:gw
    },
    {
    	path:"/dll",
    	name:"dll",
    	component:dll
    },
    {
    path:"/onpage",
    	name:"onpage",
    	component:onpage
    }
    
  ]
})
