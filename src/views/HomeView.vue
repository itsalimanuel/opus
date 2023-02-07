<script setup>
import LogoComponent from '../components/icons/logoComponent.vue';


</script>

<template>
  <main class="home">
    <div class="home-list">
      <div class="home-list-item" v-for="i in 4" :key="i">
        <div class="--icon">
          <LogoComponent size="60"/>
        </div>
        <div class="--conten"></div>
      </div>
    </div>
  </main>
</template>

<style lang="stylus" scoped>
.home
  position relative
  &-list
    display grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap 20px
    &-item
      background #ddd
      height: 150px
      width 100%
      border-radius: 5px
      display flex
      align-items: center
      padding 15px
      .--icon
        background-color: rgba(255 ,255 ,255 , 53%)
        padding 10px
        display flex
        border-radius 5px
</style>