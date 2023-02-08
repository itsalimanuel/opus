<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
const props = defineProps({
    heigh: Number
})
const data = ref([
    {
        id: 1,
        name: 'انشاء موقع لشركة',
        category: 'موقع',
        workers: [
            {
                id: 1,
                name: 'علي'
            },
            {
                id: 2,
                name: 'الان'
            }
        ],
        status: 'تم الانتهاء'
    },
    {
        id: 2,
        name: 'انشاء تطبيق سياحة',
        category: 'تطبيق',
        workers: [
            {
                id: 1,
                name: 'ايفان'
            },
            {
                id: 2,
                name: 'داني'
            }
        ],
        status: 'قيد التطوير'
    },
    {
        id: 3,
        name: 'تصميم بوستر',
        category: 'تصميم',
        workers: [
            {
                id: 1,
                name: 'مارك'
            },
            {
                id: 2,
                name: 'جيني'
            }
        ],
        status: 'لم يبدأ بعد'
    }
])

</script>
<template>
    <el-table :data="data" :height="height">
        <el-table-column prop="name" label="اسم المهمة"></el-table-column>
        <el-table-column prop="category" label="نوع المشروع"></el-table-column>
        <el-table-column label="المشرفين">
            <template #default="scope">
                <el-avatar :title="scope.row.name"
                    v-for="i in 2"
                    :key="i"
                    class="el-avatar--s"
                    src="https://avatars.githubusercontent.com/u/44509661?v=4" />
            </template>
        </el-table-column>
        <el-table-column prop="status" label="مستوى التقدم"></el-table-column>
    </el-table>
</template>




<style lang="stylus">
.el-avatar--s
    border 2px solid #5c50b7
    &:nth-child(n+2)
        margin-right -15px

</style>