<template>
    <div class="overflow-hidden">
    <div class="text-center mx-auto overflow-hidden">

        <div class="h-screen overflow-hidden">
            
            <div class="bg-cover bg-fixed w-full absolute top-0 h-screen overflow-hidden object-cover bg-[url('@/assets/bg.png')]">
                <div class=" h-screen overflow-hidden  pt-60 md:pt-32  ">
            
            <div class="container mx-auto px-4">
                <h1 class="text-6xl font-bold my-8 font-mono uppercase text-white relative">Student Support</h1>
                <div class="relative">
                    <div class="hidden md:block">
                        <div class="flex justify-center items-center mt-16 gap-4 flex-wrap">
                            <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                                <h1 class="font-bold text-2xl">{{ fAHeading }}</h1>
                                <p class="mt-2 text-white">{{ fAParagraph }}</p>
                                <router-link :to="{name: 'financial'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                            </div>
                            <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                                <h1 class="font-bold text-2xl">{{ aSHeading }}</h1>
                                <p class="mt-2 text-white">{{ aSParagraph }}</p>
                                <router-link :to="{name: 'AS'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                            </div>
                            <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                                <h1 class="font-bold text-2xl">{{ pSHeading }}</h1>
                                <p class="mt-2 text-white">{{ pSParagraph }}</p>
                                <router-link :to="{name: 'PsychosocialSupport'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                            </div>
                            <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                                <h1 class="font-bold text-2xl">{{ mHeading }}</h1>
                                <p class="mt-2 text-white">{{ MParagraph }}</p>
                                <router-link :to="{name: 'mentorship'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
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
                        <h1 class="font-bold text-2xl">{{ aSHeading }}</h1>
                        <p class="mt-2 text-white">{{ aSParagraph }}</p>    
                        <router-link :to="{name: 'home'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                    </div>
                    <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                        <h1 class="font-bold text-2xl">{{ pSHeading }}</h1>
                        <p class="mt-2 text-white">{{ pSParagraph }}</p>    
                        <router-link :to="{name: 'PsychosocialSupport'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                    </div>
                    <div class="bg-orange-500 p-2 w-64 h-80 flex flex-col justify-center rounded-lg">
                        <h1 class="font-bold text-2xl">{{ mHeading }}</h1>
                        <p class="mt-2 text-white">{{ MParagraph }}</p>    
                        <router-link :to="{name: 'PsychosocialSupport'}" class="bg-white rounded-lg p-1.5 mt-4">{{ btn }}</router-link>
                    </div>
                </div>
            
            </div>
            
            </div>


            
            <!----
            
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
                
            </div>-->
            <div class="min-h-screen bg-white text-gray-900 flex items-center justify-center p-6">
    <div class="max-w-6xl w-full text-left md:text-center">
      <!-- Logo -->
      <div class="flex justify-center mb-6">
        <img 
          src="@/assets/leap-logo.png" 
          alt="LEAP Logo" 
          class="w-40 md:w-56"
        />
      </div>

      <!-- Heading -->
      <h1 class="text-2xl text-left md:text-3xl font-semibold mb-4">
        Life Experience and Preparation(LEAP)
      </h1>

      <!-- Subheading -->
      <p class="text-lg text-left mb-6">
        We believe in equipping learners with the tools to thrive beyond academics.
      </p>

      <p class="text-lg text-left mt-6 mb-4">
        Our <span class="font-semibold">LEAP Programme</span> provides:
      </p>

      <p class="text-gray-900 leading-relaxed text-left mb-4">
        A tailor-made curriculum for Form 4 (KCSE), Form 5–6 (A-Levels), and students transitioning into local or international universities.
      </p>
      <p class="text-gray-900 leading-relaxed text-left">
        Training in three pillars:
      </p>
        <ul class="list-disc list-inside ml-5 text-left">
        <li class="mb-2">Becoming a Better Person – focusing on personal presentation, dining etiquette, budgeting, time management, confidence, and positive habits.</li>
        <li class="mb-2">Becoming a People’s Person – building communication, empathy, conflict resolution, leadership, and teamwork skills.</li>
        <li class="mb-2">Building a Meaningful Career – enhancing digital literacy, online etiquette, personal branding, CV preparation, study skills, and pre-departure readiness.</li>
        </ul>

      <p class="text-gray-900 leading-relaxed text-left mt-4 mb-4">
        We prepare students to face life with confidence, resilience, and purpose.
      </p>
      
      <!-- <p class="text-lg text-left font-semibold mt-6 mb-6">
        Why LEAP Matters
      </p>

      <p class="text-gray-900 leading-relaxed text-left">
        Studies show that less than 10% of Kenyan adolescents demonstrate strong life skills like problem-solving, collaboration, and self-awareness skills essential for resilience and success in today’s world.
        LEAP fills this gap by providing structured, practical training that prepares students for real-life readiness, emotional strength, and confident engagement with the world.
      </p>

      <p class="text-lg text-left font-bold mt-6 mb-6">
        Our Pillars<br> <span class=" font-semibold"> 1. Becoming a Better Person</span>
      </p>
      <ul class="list-disc list-inside text-left">
        <li class="mb-2">Personal presentation & grooming</li>
        <li class="mb-2">Dining etiquette & social manners</li>
        <li class="mb-2">Budgeting & time management</li>
        <li class="mb-2">Building confidence and positive habits</li>
        </ul>

      <p class="text-lg text-left font-semibold mt-6 mb-6">
        2. Becoming a People’s Person
      </p>
      <ul class="list-disc list-inside text-left">
        <li class="mb-2">Effective communication</li>
        <li class="mb-2">Empathy & emotional awareness</li>
        <li class="mb-2">Conflict resolution</li>
        <li class="mb-2">Leadership and teamwork</li>
      </ul>

      <p class="text-lg text-left font-semibold mt-6 mb-6">
        3. Building a Meaningful Career
      </p>
      <ul class="list-disc list-inside text-left">
        <li class="mb-2">Online etiquette & digital literacy</li>
        <li class="mb-2">Personal branding & networking</li>
        <li class="mb-2">Study, writing & research skills</li>
        <li class="mb-2">CV preparation & pre-departure readiness</li>
      </ul>

      <p class="text-lg text-left font-semibold mt-6 mb-6">
       How LEAP Works
      </p>
      <ul class="list-disc list-inside text-left">
        <li class="mb-2">Practical Learning: Role plays, video demos, templates, and peer workshops turn lessons into habits.</li>
        <li class="mb-2">Mentorship & Reflection: Students learn from alumni and mentors, with space for self-reflection.</li>
        <li class="mb-2">Real-World Simulations: Pre-departure briefings, cross-cultural sessions, and mock scenarios prepare learners for independence.</li>
        <li class="mb-2">Recognition for Growth: Quarterly awards celebrate progress, building confidence and motivation.</li>
      </ul>

      <p class="text-lg text-left font-semibold mt-6 mb-6">
       Impact Beyond the Classroom
      </p>

      <p class="text-gray-900 leading-relaxed text-left">
      Countries that integrate life skills into education (like Kenya’s CBC initiative) report improved academic performance, reduced teenage pregnancies, better discipline, and stronger resilience (UNFPA Kenya).
      At Elimisha, LEAP is more than preparation it’s transformation. We walk with every learner so they don’t just pass exams, they thrive in life.
      </p> -->
      
    </div>
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


const fAHeading = ref("Financial Support")
const fAParagraph = ref("To alleviate the financial burden on students and their families, we provide aid by covering tuition costs")
const btn = ref("Read More")

const aSHeading = ref("Academic Guardianship")
const aSParagraph = ref("We are passionate about unlocking our students’ academic potential through:")

const mHeading = ref("Mentorship")
const MParagraph = ref("Our mentorship program is designed to support our students in navigating their career paths and fostering their leadership skills.")

const pSHeading = ref("Psychosocial Support")
const pSParagraph = ref("Recognizing that many of our students come from challenging backgrounds, we understand that circumstances at home can greatly affect their mental well-being ")
</script>

<style scoped>

</style>