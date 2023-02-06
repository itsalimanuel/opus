<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, reactive } from 'vue'

const login = reactive({
    username: '',
    password: ''

})

</script>

<template>
    <div class="login">
        <div class="login-container">
            <div class="login-title">
                <h2>اهلا وسهلا بك في لوحة التحكم</h2>
            </div>
            <div class="login-form">
                <el-form label-position="top">
                    <el-form-item label="اسم المستخدم / البريد الالكتروني">
                        <el-input size="large" v-model="login.username" placeholder="Enter your username"></el-input>
                    </el-form-item>
                    <el-form-item label="كلمة المرور">
                        <el-input size="large" v-model="login.password" type="password" show-password
                            placeholder="Enter your password"></el-input>
                    </el-form-item>
                    <el-button size="large">دخول</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style lang="stylus">
.login 
    position relative
    width 100%
    padding 20px 0
    &-container
        max-width 1100px
        margin auto
    &-title
        text-align center
        h2
            direction rtl
    &-form
        max-width 500px
        margin 50px auto auto
        button
         margin-top 10px
         background-color rgba(92, 80, 183,0.7);
         border none
         color #fff
         &:hover
            background-color rgba(92, 80, 183,1);
            color #fff

</style>