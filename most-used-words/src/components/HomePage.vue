<template>
    <div class="pills">
        <PillComponent v-for="item in groupedwords" :word="item.word" :amount="item.amount" :key="item.word" />
    </div>
</template>

<script>
import PillComponent from './PillComponent.vue'

export default {
    components: {
        PillComponent
    },
    data: function () {
        return {
            groupedwords: [
                { word: "i", amount: 547 },
                { word: "you", amount: 47 },
                { word: "it", amount: 10 }
            ]
        }
    }
}
</script>

<style scoped>
.pills{
    display: flex;
}

</style>