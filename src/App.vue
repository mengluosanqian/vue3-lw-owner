<template>
  <div id="app">
    <transition name="fade">
      <!-- <keep-alive include='home,category'> -->
      <router-view></router-view>
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<script>
// import tool from './assets/js/tool.js'
// import { setCookie,getCookie } from './assets/js/cookie'
// import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    // ...mapActions(['changeIsLogin']),
    // checkLogin(){
    //   //检查是否存在session
    //   //cookie操作方法在源码里有或者参考网上的即可
    //   if(!getCookie('userid')){
    //   //如果没有登录状态则跳转到登录页
    //   this.$router.push('/login');
    //   }else{
    //   //否则跳转到登录后的页面
    //   // this.$router.push('/');
    //     this.changeIsLogin();
    //   }
    // }
  },
  created() {
  //  this.checkLogin();
  },
}
</script>

<style>
body{
  /* background: rgb(241, 240, 240); */
}
html,body{height:100%}
#app{
  height: 100%;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


</style>
