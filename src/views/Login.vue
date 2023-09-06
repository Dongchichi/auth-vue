<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" label-width="80px" class="login-form">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verificationCode">
        <el-input v-model="loginForm.verificationCode" placeholder="请输入验证码"></el-input>
        <el-button @click="sendVerificationCode" :disabled="isSendingCode">发送验证码</el-button>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        verificationCode: ''
      },
      isSendingCode: false // 控制发送验证码按钮状态
    };
  },
  methods: {
    login() {
      // 处理登录逻辑
      // 例如，向服务器发送登录请求，验证用户名和密码
      // 如果验证成功，可以进行路由跳转等操作
    },
    sendVerificationCode() {
      if (this.isSendingCode) {
        return;
      }

      // 发送验证码请求
      // 请替换以下代码为实际的API请求
      this.isSendingCode = true;
      setTimeout(() => {
        // 模拟发送验证码成功
        console.log('验证码发送成功');
        this.isSendingCode = false;
      }, 2000); // 模拟2秒后发送成功
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  width: 350px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>