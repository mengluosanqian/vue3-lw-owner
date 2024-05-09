<template>
  <div id="outer-setting">
    <div id="login_box">
      <h2>LOGIN</h2>
      <div id="input_box">
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div class="input_box">
        <input type="password" placeholder="请输入密码" />
      </div>
      <el-button @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login", 
  props: {},
  methods: {
    login() {
      this.$router.replace('/main');
    },
  },
};
</script>
<style scoped>
#outer-setting {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/background.jpg") repeat;
  background-size: 100% 130%;
  position: relative;
}

#login_box {
  width: 20%;
  height: 400px;
  background-color: #00000060;
  margin: auto;
  margin-top: 10%;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h2 {
  color: #ffffff90;
  margin-top: 5%;
}

#input-box {
  margin-top: 5%;
}

span {
  color: #fff;
}

input {
  border: 0;
  width: 60%;
  font-size: 15px;
  color: #fff;
  background: transparent;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  outline: none;
  margin-top: 10px;
}

button {
  margin-top: 50px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}

#sign_up {
  margin-top: 45%;
  margin-left: 60%;
}

a {
  color: #b94648;
}
</style>
