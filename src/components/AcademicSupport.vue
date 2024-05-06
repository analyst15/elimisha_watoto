<template>
    <div class="pt-40">
        <h1 class="text-center text-emerald-700 text-4xl font-bold py-12">{{ heading }}</h1>
        <p class="mx-8 md:mx-28 lg:mx-60 text-xl mt-12">{{ p1 }}</p>
        <p class="mx-8 md:mx-28 lg:mx-60 text-xl mt-12">{{ p2 }}</p>
        <p class="mx-8 md:mx-28 lg:mx-60 text-xl mt-12">{{ p3 }}</p>
        <div class="grid md:grid-cols-2 gap-4  mx-auto grid-cols-1 w-3/4 mt-20">
            <img src="@/assets/AcademicSupport.jpeg" alt="" class="w-full">
            <img src="@/assets/AcademicSupport_1.jpeg" alt="" class="row-span-3 w-full h-5/6"> 
               
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const heading = ref("Academic Support")
const p1 = ref("Elimisha Watoto Foundation is dedicated to empowering academically gifted but financially challenged students. Our merit-based admission criteria set a minimum cut-off at 300 marks and above in the Kenya Certificate of Primary School education, ensuring that we support those with promising academic potential.")
const p2 = ref("We are committed to nurturing this potential through our Academic Support Program, which includes: 1.Making termly follow up calls to the students for performance reviews 2.Regular school visit across the country to all beneficiaries 3.Providing study tips to the students")
const p3 = ref("Through these initiatives, Elimisha Watoto Foundation is not only investing in the education of students but also fostering an environment where academic brilliance can flourish. Our holistic approach to academic support is designed to empower students with the skills and confidence needed for a successful educational journey and beyond.")
</script>

<style scoped>

</style>