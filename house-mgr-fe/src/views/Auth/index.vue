<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="@/assets/img/house-icon.png" alt="房源图片">
      <h2 class="title">房屋租售管理系统</h2>
    </div>

    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <div class="item">
            <a-input
              size="large"
              placeholder="账号: admin"
              v-model:value="loginForm.account"
            >
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
              size="large"
              placeholder="密码: admin"
              type="password"
              @keypress.enter="login"
              v-model:value="loginForm.password"
            >
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a @click="forgetPassword">忘记密码</a>
          </div>
          <div class="item">
            <a-button
              size="large"
              type="primary"
              @click="login"
            >登录</a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input
              size="large"
              placeholder="账号"
              v-model:value="regForm.account"
            >
              <template #prefix>
                <UserOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
            size="large"
            placeholder="密码"
            type="password"
            v-model:value="regForm.password"
            >
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input
              size="large"
              placeholder="邀请码"
              v-model:value="regForm.inviteCode"
            >
              <template #prefix>
                <MailOutlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-button
              size="large"
              type="primary"
              @click="register">注册</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script src="./index.jsx"> </script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
