<template>
  <div class="basic-layout">
    <div class="app-header">
      <div class="left">
        <img src="@/assets/img/house-icon.png" alt="房子图标">
        <div class="title">房屋租售管理系统</div>
      </div>
      <div class="right">
        <div class="hello-msg">你好, {{ store.userInfo.account }}</div>
        <div class="logout"><a-button type="danger" @click="logout">退出</a-button></div>
        <!-- <div class="logout" @click="logout"> 退出</div> -->
      </div>
    </div>
    <div class="app-header-placeholder"></div>
    <div class="app-content">
      <div class="left">
        <app-nav />
      </div>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script src='./index.js'></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
