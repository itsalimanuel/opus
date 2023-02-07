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
        <div class="--content">
          <div class="--content-title">
            <h2>اجمالي المشاريع</h2>
          </div>
          <div class="--content-number">
            <h4>113</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="home-daly">

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
      background rgba(92,80,183,0.431)
      height: 150px
      width 100%
      border-radius: 5px
      display flex
      align-items: center
      padding 15px
      transition: all 0.3s ease-in-out
      cursor pointer
      &:hover
        background-color: rgba(92,80,183,1)
        .--content-title
          h2
            color: #fff
        .--content-number
          h4
            color #fff
      .--icon
        background-color: rgba(255 ,255 ,255 , 53%)
        padding 10px
        display flex
        border-radius 5px
      .--content
        padding: 10px
        &-title
          h2
            font-size: 14px
            font-weight: 600
            color #000
        &-number
          h4
            font-size: 16px
            font-weight: bold
            color #000
  &-daly
    background-color #ddd
</style>