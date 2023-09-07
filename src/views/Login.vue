<template>
  <div class="">
    <div class="wrap">
      <div class="wrap-box">
        <div class="box-content">
          <div class="sign">
            <h2 class="title">没有账号吗？</h2>
            <p class="desc">点击这里注册一个账号</p>
            <button type="button" class="get-register">注册</button>
          </div>
          <div class="login">
            <h2 class="title">已经有账号了吗？</h2>
            <p class="desc">点击这里登录</p>
            <button type="button" class="get-login">登录</button>
          </div>
        </div>

        <div class="manager-box">

          <div class="login-part">
            <div>
              <h3>登录</h3>
              <div class="input-box">
                <input type="text" placeholder="用户名">
                <i class="iconfont icon-wo"></i>
              </div>
              <div class="input-box">
                <input type="password" placeholder="密码">
                <i class="iconfont icon-mima"></i>
              </div>
              <div class="buttons clearfix">
                <a href="javascript:;">忘记密码？</a>
                <button type="button" class="btn-login fr">登录</button>
              </div>
            </div>
          </div>
          <div class="sign-part">
            <div>
              <h3>注册</h3>
              <div class="input-box">
                <input type="text" placeholder="用户名">
                <i class="iconfont icon-wo"></i>
              </div>
              <div class="input-box">
                <input type="password" placeholder="密码">
                <i class="iconfont icon-mima"></i>
              </div>
              <div class="input-box">
                <input type="password" placeholder="确认密码">
                <i class="iconfont icon-mima"></i>
              </div>
              <div class="buttons clearfix">
                <button type="button" class="btn-register fr">注册</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <!--加载-->
    <div class="loading">
      <div class="loading-wrapper active">
        <div class="loading-spinner active">
          <div class="loading-clipper left">
            <div class="loading-circle"></div>
          </div>
          <div class="loading-gap-patch">
            <div class="loading-circle"></div>
          </div>
          <div class="loading-clipper right">
            <div class="loading-circle"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import '@/assets/js/login'
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
  mounted() {
    this.init()
  },
  methods: {
    init() {
      $(".manager-box").removeClass("left").addClass("right").addClass("active");
      $(".get-register").click(function () {
        $(".manager-box").removeClass("right").addClass("left").removeClass("active");
      });

      $(".get-login").click(function () {
        $(".manager-box").removeClass("left").addClass("right").addClass("active");
      });

      $(".btn-register,.btn-login").click(function () {
        $(".loading").fadeIn("slow");
      });
    }
  }
};
</script>

<style scoped>
@charset "utf-8";

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}

body,
button,
input,
select,
textarea {
  font-family: 'Microsoft YaHei', arial, SimSun, sans-serif, tahoma;
}

body {
  font-size: 14px;
  color: #666;
}

input,
select,
textarea {
  font-size: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

textarea,
input,
button,
a {
  outline: none;
}

button {
  cursor: pointer;
}

textarea {
  resize: none;
}

fieldset,
img {
  border: 0;
}

address,
cite,
code,
dfn,
em,
i,
th,
var {
  font-style: normal;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

caption,
th {
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

a {
  text-decoration: none;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
  overflow: hidden;
}

.clearfix {
  *zoom: 1;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.hidenone {
  display: none;
}

.hide {
  visibility: hidden;
}

.mt10 {
  margin-top: 10px;
}

.mt20 {
  margin-top: 20px;
}

.ml10 {
  margin-left: 10px;
}

.mr10 {
  margin-right: 10px;
}

.pt10 {
  padding-top: 10px;
}

.pt20 {
  padding-top: 20px;
}

.pl10 {
  padding-left: 10px;
}

.pr10 {
  padding-right: 10px;
}

.tc {
  text-align: center;
}

.vm {
  display: inline-block;
  vertical-align: middle;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

.wrap {
  background: url("http://exd.design/wp-content/uploads/2018/12/bg.jpg") no-repeat fixed;
  background-size: cover;
}

.wrap:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(3px);
  z-index: 1;
}

.wrap-box {
  position: absolute;
  width: 840px;
  height: 320px;
  background: rgba(0, 0, 0, .6);
  z-index: 2;
  box-shadow: 0 0 10px 1px rgba(169, 169, 169, .2);
  border-radius: 3px;
  top: calc(50% - 160px);
  left: calc(50% - 410px);
}

.box-content {
  display: inline-table;
  width: 100%;
  height: 100%;
}

.box-content .sign,
.box-content .login {
  display: table-cell;
  width: 50%;
  vertical-align: middle;
  line-height: 36px;
}

.sign {
  padding-left: 50px;
}

.login {
  padding-left: 80px;
}

.box-content .title {
  color: #e8e8e8;
  font-size: 22px;
  letter-spacing: 1px;
}

.box-content .desc {
  color: #d3d3d3;
  font-size: 14px;
}

.box-content button {
  border-radius: 3px;
  border: solid 1px #d3d3d3;
  background-color: transparent;
  color: #d3d3d3;
  width: 124px;
  height: 38px;
  margin: 15px auto 0;
  font-size: 16px;
  transition: all .2s;
}

.box-content button:hover {
  border-color: #fff;
  color: #fff;
}

.manager-box {
  position: absolute;
  height: 380px;
  width: 400px;
  left: 50px;
  top: -30px;
  perspective: 800px;
}

.manager-box.right {
  animation: toRight .5s 1 forwards;
}

@keyframes toRight {
  0% {
    left: 50px;
  }

  66% {
    left: 450px;
  }

  100% {
    left: 390px;
  }
}

.manager-box.left {
  animation: toLeft .5s 1 forwards;
}

@keyframes toLeft {
  0% {
    left: 390px;
  }

  66% {
    left: 10px;
  }

  100% {
    left: 50px;
  }
}

.manager-box>* {
  position: absolute;
  z-index: 1;
  transition: all .8s linear;
  transform-style: preserve-3d;
  height: 100%;
  width: 100%;
  background: #fff;
  left: 0;
  padding: 0 40px;
  border-radius: 3px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, .1);
  display: inline-table;
}

.manager-box>*>div {
  display: table-cell;
  vertical-align: middle;
}

.manager-box .login-part {
  z-index: 0;
  transform: rotateY(-180deg);
}

.manager-box .sign-part {
  backface-visibility: hidden;
}

.manager-box.active .sign-part {
  transform: rotateY(180deg);
}

.manager-box.active .login-part {
  transform: rotateY(0deg);
}

.manager-box h3 {
  color: #f78c7b;
  font-size: 22px;
  margin-bottom: 30px;
}

.input-box {
  position: relative;
  margin: 30px 0;
}

.input-box i {
  position: absolute;
  width: 0;
  bottom: 7px;
  background-color: #f78c7b;
  transition: all .36s;
  right: 20px;
  color: #ccc;
}

.input-box input {
  display: block;
  border: 0;
  border-bottom: solid 1px #ddd;
  line-height: 34px;
  width: 100%;
  transition: all .2s;
  font-size: 16px;
  padding-right: 30px;
}

.input-box input::placeholder {
  color: #ccc;
  font-size: 14px;
}

.input-box input:focus+i {
  color: #f78c7b;
}

.input-box i:after {
  content: '';
  position: absolute;
  right: -20px;
  width: 0;
  height: 1px;
  background-color: #f78c7b;
  transition: all .4s;
  bottom: -7px;
}

.input-box input:focus+i:after {
  width: 320px;
}

.manager-box button {
  border-radius: 0;
  width: 124px;
  height: 38px;
  color: #fff;
  background-color: #f78c7b;
  border: 0;
  font-size: 16px;
}

.manager-box button:hover {
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 53% 105% / 10px 10px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 16% 132% / 12px 12px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 56% 94% / 8px 8px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 42% 126% / 14px 14px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 11% 119% / 11px 11px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 69% 143% / 9px 9px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 107% 141% / 6px 6px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 51% 132% / 10px 10px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 20% 121% / 15px 15px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 68% 121% / 6px 6px,
    radial-gradient(circle at center, rgba(0, 0, 0, 0) 30%, #eeeeff 60%, #eeeeff 65%, rgba(0, 0, 0, 0) 70%) 22% 127% / 11px 11px;
  background-color: #e27b75;
  background-repeat: no-repeat;
  animation: bubbles .7s forwards ease-out;
}

@keyframes bubbles {
  100% {
    background-position: 48% -266%, 17% -396%, 58% -137%, 33% -360%, 21% -368%, 77% -137%, 114% -391%, 43% -2%, -1% -41%, 60% -207%, 27% -149%;
    box-shadow: inset 0 -60px 0 #c56868;
  }
}

.manager-box .buttons {
  margin-top: 40px;
  line-height: 39px;
}

.manager-box .buttons a {
  position: relative;
  color: #999;
}

.manager-box .buttons a:hover {
  color: #f78c7b;
}

@media (max-width: 767px) {
  .wrap-box {
    all: initial;
    position: absolute;
    width: 100%;
    height: 320px;
    background: rgba(0, 0, 0, .6);
    z-index: 2;
    box-shadow: 0 0 10px 1px rgba(169, 169, 169, .2);
    border-radius: 3px;
    top: calc(50% - 160px);
  }

  .box-content {
    display: none;
  }

  .manager-box {
    all: initial;
    height: 380px;
  }
}
</style>