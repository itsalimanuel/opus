<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="main">
       <Slidebar :isCollapse="isCollapse" class="slide"/>
       <div class="dashboard">
        <nav class="nav">
            <el-icon class="pointer" v-if="!!isCollapse"  @click="toggleOpen"><ArrowLeftBold /></el-icon>
            <el-icon class="pointer"  v-else @click="toggleOpen"><ArrowRightBold /></el-icon>
            <div class="nav-title">
                <h2>لوحة التحكم</h2>
            </div>
            <div class="nav-list">
                <div class="nav-list-icon">
                    <el-icon style="font-size: 24px">
                        <Bell style="width: 50px; height: 50px;"/>
                    </el-icon>
                </div>
                <div class="nav-list-notify"></div>
            </div>
        </nav>
        <div class="local">
            <router-view/>
        </div>
       </div>
    </div>
</template>

<script lang="ts" setup>
import { Bell, ArrowRightBold,ArrowLeftBold } from '@element-plus/icons-vue';
import { ref } from 'vue'

const isCollapse = ref<Boolean>(false)

const toggleOpen = () => isCollapse.value =!isCollapse.value


</script>

<style lang="stylus" scoped>
.main 
    position relative
    direction rtl
    width 100%
    height 100vh
    display flex
    .slide
        max-width 250px
        
        background-color hsla(0,0%,98%,.051) !important
    .local
       padding 20px
       height calc(100vh - 70px)
       overflow-y scroll
       &::-webkit-scrollbar 
        width: 5px;
        // background red
        &::-webkit-scrollbar-track
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
            background-color: red
    .dashboard
        flex 1
        background-color #242424
        // color #000

        .nav
            display flex
            align-items center
            padding 10px
            // background-color #F8F8F8
            justify-content space-between
            // border-bottom: 1px solid #000
            margin-bottom: 10px

            // direction rtl
            &-title
                margin-right 20px
                h2
                    font-size 16px
                    font-weight bold
            &-list
                margin-right auto
                &-icon
                    display flex
            .pointer
                cursor pointer
</style>
