// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem ,Toast} from 'mint-ui'
import vueToTop from 'vue-totop'
import vuex from 'vuex'
import VueVideoPlayer from 'vue-video-player'

Vue.use(VueVideoPlayer);
Vue.use(Mint);
Vue.use(vuex);
Vue.use(vueToTop)

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Toast.name, Toast);
//路由拦截
router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
    if(sessionStorage.token){
      next();
    }else{
      Toast({
        message: '请先登录',
        position: 'bottom',
        duration: 1000
      });
      setTimeout(()=>{
        next('/dll');
      },1100)
    }
  }else{
    next();
  }
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
