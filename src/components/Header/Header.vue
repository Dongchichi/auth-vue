<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
            <router-link class="navbar-brand" to="/">赫兹</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><router-link class="nav-link active" aria-current="page" to="/">主页</router-link></li>
                    <li class="nav-item"><router-link class="nav-link"  to="/">关于</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/">主页</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" to="/login">登录</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'auth-header',
    data() {
        return {

        };
    },
}
</script>
<style  scoped>
.navbar-toggler:focus {
  border-color: #FFFFFF;

}</style>

