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
const p1 = ref("We are passionate about unlocking our students’ academic potential through: 1.Conducting termly follow-up calls for performance reviews 2. Inspiring connections through regular school visits 3. Sharing valuable study tips to foster academic excellence 4. Constant communication with passionate teachers in the schools, who support our liaison officers.")
/*const p2 = ref("We are committed to nurturing this potential through our Academic Support Program, which includes: 1.Making termly follow up calls to the students for performance reviews 2.Regular school visit across the country to all beneficiaries 3.Providing study tips to the students")
const p3 = ref("Through these initiatives, Elimisha Watoto Foundation is not only investing in the education of students but also fostering an environment where academic brilliance can flourish. Our holistic approach to academic support is designed to empower students with the skills and confidence needed for a successful educational journey and beyond.")**/
</script>

<style scoped>

</style>