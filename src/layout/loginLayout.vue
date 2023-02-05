<script>
</script>

<template>
    <div class="layout">
        <header header="login">
            <div class="logo">
                <LogoComponent :size="50" />
            </div>
        </header>
        <routerView/>
        <footer footer="login">
            <p>تابعنا عبر  <el-link :underline="false" href="https://github.com/itsalimanuel/">Github</el-link></p>
        </footer>
    </div>
</template>

<style lang="stylus">
.layout
    position relative
    height 99vh
    // height: 100%
    display flex
    flex-direction column
    // align-items center
    justify-content space-between

    [header="login"]
        padding 20px 50px
        .logo
            display flex
            justify-content flex-end
            width 100%
    [footer="login"]
        text-align center
        direction rtl
        p
            font-size 14px

        a
            color rgba(92, 80, 183,1)
            &:hover
                background-color transparent
 
</style>
