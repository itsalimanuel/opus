<script>

</script>

<template>
    <div class="layout">
        <header header="login">
            <div class="logo">
                <h2>لوغو</h2>
            </div>
        </header>
        <routerView/>
        <footer></footer>
    </div>
</template>

<style lang="stylus">
.layout
    position relative
    height 100vh
    [header="login"]
        padding 20px 50px
        .logo
            display flex
            justify-content flex-end
            width 100%
</style>
