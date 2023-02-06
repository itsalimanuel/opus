<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" :class="{ 'arabic': true }" :collapse="isCollapse"
        @open="handleOpen" @close="handleClose">
        <LogoComponent class="logo-dashbord" :size="50" />
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>لوحة التحكم</span>
            </template>
            <el-menu-item-group>
                <template #title><span>مجموعة اولى</span></template>
                <el-menu-item index="1-1">اولا</el-menu-item>
                <el-menu-item index="1-2">ثانيا</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="مجموعة ثانية">
                <el-menu-item index="1-3">اولا</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
                <template #title><span>مجموعة ثانية</span></template>
                <el-menu-item index="1-4-1">اولا</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>المشاريع</template>
        </el-menu-item>
        <el-menu-item index="3">
            <el-icon>
                <document />
            </el-icon>
            <template #title>الاباح</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <!-- <document /> -->
                <DataAnalysis />
            </el-icon>
            <template #title>المهام</template>
        </el-menu-item>
        <el-menu-item index="5">
            <el-icon>
                <User />
            </el-icon>
            <template #title>المستخدمين</template>
        </el-menu-item>
        <el-menu-item index="6">
            <el-icon>
                <MessageBox />
            </el-icon>
            <template #title>الرسائل</template>
        </el-menu-item>
        <el-menu-item index="4">
            <el-icon>
                <setting />
            </el-icon>
            <template #title>الضبط</template>
        </el-menu-item>
    </el-menu>
</template>


<script  setup>
import { defineProps } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { DataAnalysis, User, MessageBox } from '@element-plus/icons-vue';

const props = defineProps({
    isCollapse: {
        type: Boolean,
        default: false,
    },
})

</script>

<style lang="stylus">
.logo-dashbord
    margin 50px auto
    display flex
.arabic
    direction: rtl;
    padding-right 0
    border-left 0.5px solid rgba(255, 255, 255, 0.5)
    background-color transparent !important
    overflow-y scroll
    &::-webkit-scrollbar 
        width: 1px;
        // background red
    &::-webkit-scrollbar-track
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        
    // padding-left 20px
    .el-icon
        margin-right 0 !important
        margin-left 10px
    .el-menu--inline
        background-color #5c50b76e
        color #fff
    .el-menu-item
        color #fff
        &:hover
                background-color #5C50B7
                color #fff
    .el-sub-menu__icon-arrow
        position relative !important
        top unset !important
        right unset !important
        margin-top 0 !important
        margin-right 10px !important
    .el-sub-menu__title
        padding-right 20px !important
        color #fff
        &:hover
            background-color #5C50B7
            color #fff
    .is-active
        background-color #5C50B7
        color #fff !important
        &:hover
            background-color #5c50b76e
    .el-menu--inline
        padding-right 0
        li
            padding-right 20px
            
</style>