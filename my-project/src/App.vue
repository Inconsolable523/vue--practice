<!--应用的初始化组件-->
<template>
   <div id="wrapper">
     <!--导航栏-->
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        </div>
        <ul class="nav navbar-nav" @click="highLight(event)">
          <!--注意添加js改变active-->
          <li class="active"><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
     <!--存放需要展示的东西-->
    <div class="container">
      <!--侧边栏-->
      <div class="col-sm-3">
          <sidebar></sidebar>
      </div>

      <div class="col-sm-9">
        <!--vue-router通过这个标签进行切换-->
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  import Sidebar from './components/Sidebar'

  export default {
  name: 'app',
  components:{
    'sidebar': Sidebar
  },
  methods :{
      highLight(event){
          console.log(event);

      }
  }
}



</script>

<style>

</style>
