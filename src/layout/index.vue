<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="main">
       <Slidebar :isCollapse="isCollapse" class="slide"/>
       <div class="dashboard">
        <nav class="nav">
            <el-icon v-if="!!isCollapse"  @click="toggleOpen"><ArrowLeftBold /></el-icon>
            <el-icon  v-else @click="toggleOpen"><ArrowRightBold /></el-icon>
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
        <router-view/>
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
    .dashboard
        flex 1
        .nav
            display flex
            align-items center
            padding 10px
            justify-content space-between
            // direction rtl
            &-title
                margin-right 20px
            &-list
                margin-right auto
                &-icon
                    display flex

</style>
