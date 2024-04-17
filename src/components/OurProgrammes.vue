<template>
    <div class="overflow-hidden">
    <div class="text-center mx-auto overflow-hidden">

        <div class="h-screen overflow-hidden">
            
            <div class="bg-cover bg-fixed w-full absolute top-0 h-screen overflow-hidden object-cover bg-[url('@/assets/bg.png')]">
                <div class=" h-screen overflow-hidden  pt-60 md:pt-32  ">
            
            <div class="container mx-auto px-4">
                <h1 class="text-6xl font-bold my-8 font-mono uppercase text-white relative">Our Programmes</h1>
                <div class="relative">
                    <div class="hidden md:block">
                        <div class="flex justify-center items-center mt-16 gap-20 flex-wrap">
                            <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                                <h1 class="font-bold text-2xl">{{ fAHeading }}</h1>
                                <p class="mt-2 text-white">{{ fAParagraph }}</p>
                                <router-link :to="{name: 'financial'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                            </div>
                            <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                                <h1 class="font-bold text-2xl">{{ sSHeading }}</h1>
                                <p class="mt-2 text-white">{{ sSParagraph }}</p>
                                <router-link :to="{name: 'home'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                            </div>
                            <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                                <h1 class="font-bold text-2xl">{{ aSHeading }}</h1>
                                <p class="mt-2 text-white">{{ aSParagraph }}</p>
                                <router-link :to="{name: 'home'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>

            </div>
            </div></div>
            
        </div>
                
        
            <div class="">
                <div class="block md:hidden mt-20">
                <div class="flex flex-wrap justify-center items-center  gap-20">
                    <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                        <h1 class="font-bold text-2xl">{{ fAHeading }}</h1>
                        <p class="mt-2 text-white">{{ fAParagraph }}</p>
                        <router-link :to="{name: 'financial'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                    </div>
                    <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                        <h1 class="font-bold text-2xl">{{ sSHeading }}</h1>
                        <p class="mt-2 text-white">{{ sSParagraph }}</p>
                        <router-link :to="{name: 'home'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                    </div>
                    <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                        <h1 class="font-bold text-2xl">{{ aSHeading }}</h1>
                        <p class="mt-2 text-white">{{ aSParagraph }}</p>    
                        <router-link :to="{name: 'home'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                    </div>
                </div>
            
            </div>
            
            </div>


            
            
            
            <h2 class="text-4xl font-semibold my-8 font-mono uppercase">LEAP</h2>
            <p class="font-sans text-balance text-xl md:w-3/4 w-5/6 mx-auto">Life Experience And Preparation  is a program designed for high school students in form 4(K.C.S.E), form 5 - 6(A-levels) and students joining local and foreign universities, with an aim of enhancing their social skills</p>
            <button class="mt-4 text-xl text-white bg-orange-600 hover:bg-orange-700  font-medium rounded-full  px-5 py-2.5 text-center me-2 mb-2  ">Visit Website</button>
            
            
            
            <h2 class="text-4xl font-semibold mt-20">PILLARS OF LEAP</h2>
            <div class="md:flex md:flex-row mt-8 mx-auto w-5/6">
                <div class="mx-2 ">
                    <h3 class="text-xl font-semibold my-4 uppercase text-orange-600">Becoming a better person</h3>
                    <p class="text-balance ">This Course aims to equip students with self-awareness tools through a selection of categorized courses such as personal presentation, self discipline, etiquette, budgeting et</p>
                </div>
                <div class="mx-2">
                    <h2 class="text-xl font-semibold my-4 uppercase text-orange-600">Becoming a peoples person</h2>
                    <p class="text-balance">Life Experience And Preparation  is a program designed for high school students in form 4(K.C.S.E), form 5 - 6(A-levels) and students joining local and foreign universities, with an aim of enhancing their social skills</p>
                </div>
                <div class="mx-2">
                    <h2 class="text-xl font-semibold my-4 uppercase text-orange-600">Building a meaningful career</h2>
                    <p class="text-balance">Life Experience And Preparation  is a program designed for high school students in form 4(K.C.S.E), form 5 - 6(A-levels) and students joining local and foreign universities, with an aim of enhancing their social skills</p>
                </div>
            </div>
            <div class="">
                <div class="bg-emerald-700">
                    <h1 class="md:text-6xl text-4xl font-semibold my-8 mt-20 font-mono uppercase text-white whitespace-wrap overflow-wrap">LEAP COURSES OFFERED</h1>
                </div>
                <ul class="mb-20 list-disc list-inside ">
                    <li v-for="course in courses" :key="cousre" class="mt-1 text-xl ">{{ course }}</li>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const courses = ref([
    "Online Etiquette",
    "Dining Etiquette",
    "Personal branding",
    "Effective Networking",
    "Research skills",
    "Study skills",
    "Pre-departure Briefing",
    "Personal presentation",
    "Goal setting",
    "Emotional Intelligence ",
    "Time management",
    "Budgeting",
    "Leadership"
])


const fAHeading = ref("Financial Aid")
const fAParagraph = ref("Elimisha Watoto Foundation is dedicated to making quality education accessible to high school students by offering essential financial aid.")
const btn = ref("Read More")

const sSHeading = ref("Student Support")
const sSParagraph = ref("Student support is not just about academic assistance; it extends to nurturing a holistic educational experience.")


const aSHeading = ref("Academic Support")
const aSParagraph = ref("Elimisha Watoto Foundation is dedicated to empowering academically gifted but financially challenged students.")
</script>

<style scoped>

</style>