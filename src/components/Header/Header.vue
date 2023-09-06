<template>
    <v-app style="background-color: inherit;">
        <v-app-bar app dark fluid
            style="width: 80%;left:auto;background-color: inherit;color: #FFFFFF;padding: 10px 0 10px 0;">
            <!-- 导航标题 -->
            <v-app-bar-title class="title-large-screen">赫兹</v-app-bar-title>
            <!-- 导航链接（在大屏幕上显示） -->
            <v-btn text dark to="/">主页</v-btn>
            <v-btn text dark to="/about">关于</v-btn>
            <v-btn text dark to="/services">服务</v-btn>
            <v-btn text dark to="/contact">联系</v-btn>
            <!-- 中间部分 -->
            <v-spacer></v-spacer>
            <!-- 右侧部分 -->
            <v-btn text  class="hover-only-button"><v-icon>mdi-magnify</v-icon></v-btn> <!-- 搜索图标按钮 -->
            <v-btn text  class="hover-only-button">登录</v-btn> <!-- 登录按钮 -->
        </v-app-bar>

        <!-- 页面内容 -->
        <v-main>
            <!-- 你的页面内容放在这里 -->
            <router-view></router-view>
        </v-main>
    </v-app>
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
/* 使用Vuetify的显示工具来在大屏幕上隐藏折叠按钮 */
.small-screen-only {
    display: none;
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
    box-shadow: none;
}
@media (max-width: 600px) {

    /* 在小屏幕上显示折叠按钮 */
    .small-screen-only {
        display: block;
    }

    /* 在小屏幕上自定义标题样式 */
    .title-large-screen {
        display: none;
        /* 隐藏大屏幕标题 */
    }

}</style>

