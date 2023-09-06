<template>
  <div class="login-register-container">
    <div class="login-register-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="login-username">Username:</label>
          <input type="text" id="login-username" v-model="loginUsername" required>
        </div>
        <div class="form-group">
          <label for="login-password">Password:</label>
          <input type="password" id="login-password" v-model="loginPassword" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    
    <div class="login-register-form">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="register-username">Username:</label>
          <input type="text" id="register-username" v-model="registerUsername" required>
        </div>
        <div class="form-group">
          <label for="register-password">Password:</label>
          <input type="password" id="register-password" v-model="registerPassword" required>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginUsername: '',
      loginPassword: '',
      registerUsername: '',
      registerPassword: ''
    };
  },
  methods: {
    login() {
      // 在这里添加登录逻辑
    },
    register() {
      // 在这里添加注册逻辑
    }
  }
};
</script>

<style scoped>
.login-register-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
}

.login-register-form {
  width: 300px;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>