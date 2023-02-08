<script setup>
import { Plus } from '@element-plus/icons-vue'

import { ref } from 'vue'
import LogoComponent from '@/components/icons/logoComponent.vue';
import MissionComponent from '@/components/mission/index.vue'

const selectOption = ref('')
const day = ref('')
const optionsList = ref([
  {
    value: '1',
    label: 'تصميم موقع'
  },
  {
    value: '2',
    label: 'تصميم تطبيق'
  }
])
</script>

<template>
  <main class="home">
    <div class="home-list">
      <div class="home-list-item" v-for="i in 4" :key="i">
        <div class="--icon">
          <LogoComponent size="60" />
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
    <div class="mission">
      <div class="mission-header">
        <div class="mission-title">
          <h2>المهام اليومية</h2>
        </div>
        <div class="mission-list">
          <div class="--select">
            <el-select v-model="selectOption" clearable placeholder="الخدمات">
              <el-option v-for="option in optionsList" :key="option.value" :value="option.value"
                :label="option.label"></el-option>
            </el-select>
          </div>
          <div class="--data">
            <el-date-picker v-model="day" type="daterange" start-placeholder="تاريخ" end-placeholder="تاريخ"
              :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]" />
          </div>
          <div class="--add">
            <el-button type="primary">
              <el-icon class="el-icon--right">
                <Plus />
              </el-icon>
              مهمة جديدة
            </el-button>
          </div>
        </div>
      </div>
      <MissionComponent :height="300" />
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
            color #fff
        &-number
          h4
            font-size: 16px
            font-weight: bold
            color #fff
  &-daly
    background-color #ddd
  .mission
    margin-top 20px
    &-header
      padding 20px
      background-color #fff
      color #000
      border-radius 10px 10px  0 0
      border-bottom: 1px solid rgba(92,80,183,0.1)
      display flex
      align-items: center
      justify-content: space-between
    &-title
      h2
        font-size: 16px
        font-weight: bold
    &-list
      display flex
      .--add,.--data
        margin-right 20px
      .--add
        button
          background-color #5c50b7
</style>