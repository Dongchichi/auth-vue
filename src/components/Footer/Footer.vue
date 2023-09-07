<template>
    <footer class="py-5 bg-dark">
        <div class="container px-4 px-lg-5">
            <p class="m-0 text-center text-white">Copyright &copy; 2023 赫兹</p>
            <a href="https://beian.miit.gov.cn/" target="_blank">
                <span class="font-extrabold border-b-2 border-ob hover:text-ob">黑ICP备2023005049号-1</span>
            </a>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'auth-footer',
    data() {
        return {

        };
    },
}
</script>
<style  scoped>
.container{
    display: flex;
    align-items: center;
    flex-direction: column;
}
a {
  text-decoration: none; /* 去掉下划线 */
  color: inherit; /* 使用继承的颜色，通常是文本颜色 */
}
.font-extrabold{
    color: #FFFFFF;
}
</style>

