<template>
    <div class="md:mx-20 mx-8 md:h-screen">
        <div class="grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center">
            <div class="mt-12">
                <h1 class="text-4xl mb-4 font-extrabold">  <span class="underline underline-offset-8 decoration-emerald-700 decoration-4">Our Co</span>re Values</h1>
                <div class="text-black  text-2xl flex" v-for="(value, index) in values" :key="value">
                <i class="material-icons text-emerald-700 text-4xl">chevron_right</i>
                {{ value }}
                </div>
            </div>
            <div class="md:mt-20 mt-4">

                <img class="w-full rounded-lg h-60 md:h-96 border-solid border-4 border-emerald-700" src="@/assets/kidsclass.png" alt="office content 1">
            </div>
        </div>
         

    </div>
</template>

<script setup>
import { ref } from 'vue';

const values = ref([
    'Compassion', 'Integrity', 'Accountability', 'Confidentiality', 'Impartiality', 'Nurturing'
])
</script>

<style lang="scss" scoped>

</style>