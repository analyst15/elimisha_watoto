<!----<template>
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


            
            
            
            <h2 class="text-4xl font-semibold my-8 font-mono uppercase">LEAP</h2>
            <p class="font-sans text-balance text-xl md:w-3/4 w-5/6 mx-auto">Life Experience And Preparation  is a programme designed for high school students in form 4(K.C.S.E), form 5 - 6(A-levels) and students joining local and foreign universities, with an aim of enhancing their social skills</p>
            <button class="mt-4 text-xl text-white bg-orange-600 hover:bg-orange-700  font-medium rounded-full  px-5 py-2.5 text-center me-2 mb-2  ">Visit Website</button>
            
            
            
            <h2 class="text-4xl font-semibold mt-20">PILLARS OF LEAP</h2>
            <div class="md:flex md:flex-row mt-8 mx-auto w-5/6">
                <div class="mx-2 ">
                    <h3 class="text-xl font-semibold my-4 uppercase text-orange-600">Becoming a better person</h3>
                    <p class="text-balance ">This Course aims to equip students with self-awareness tools through a selection of categorized courses such as personal presentation, self discipline, etiquette, budgeting et</p>
                </div>
                <div class="mx-2">
                    <h2 class="text-xl font-semibold my-4 uppercase text-orange-600">Becoming a peoples person</h2>
                    <p class="text-balance">Life Experience And Preparation  is a programme designed for high school students in form 4(K.C.S.E), form 5 - 6(A-levels) and students joining local and foreign universities, with an aim of enhancing their social skills</p>
                </div>
                <div class="mx-2">
                    <h2 class="text-xl font-semibold my-4 uppercase text-orange-600">Building a meaningful career</h2>
                    <p class="text-balance">Life Experience And Preparation  is a programme designed for high school students in form 4(K.C.S.E), form 5 - 6(A-levels) and students joining local and foreign universities, with an aim of enhancing their social skills</p>
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
</template>--->
<template>
  <section class="px-4 py-10 md:px-16 lg:px-24 bg-white text-black">
    <div class="max-w-6xl mx-auto space-y-16">
      <!-- Page Title -->
      <!----<div class="text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-primary mb-2">About Us</h1>
        <p class="text-lg text-gray-600 italic">Educate a beneficiary. Transform a nation.</p>
      </div>-->

      <!-- Who We Are -->
      <div class="space-y-4 pt-60 md:pt-32">
        <h2 class="text-2xl font-semibold text-primary">Academic Guardianship</h2>
        <p class="text-blackleading-relaxed">
            Every beneficiary has academic potential and our role is to help unlock it.
        </p>
        <p class="text-blackleading-relaxed">
            Our <span class="font-semibold">Academic Guardianship</span> programme provides:
        </p>
        <ul class="list-disc list-inside text-blackspace-y-2">
          <li>Continuous academic monitoring and progress tracking</li>
          <li>Interventions for students facing academic struggles</li>
          <li>Regular communication with schools and teachers</li>
          <li>Structured tutoring or remedial programmes if needed</li>
        </ul>
        <p class="text-blackleading-relaxed">
            We walk closely with our students to ensure they are not only in school but also thriving.
        </p>
      </div>

      <!-- What We Do -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-primary">Psychosocial Support</h2>
        <p class="text-blackleading-relaxed">
          Many of our students come from difficult or unstable home environments. <br><br> Our <span class="font-semibold">Psychosocial Support</span> programme
          provides: 
        </p>
        <ul class="list-disc list-inside text-blackspace-y-2">
          <li>Individual counselling to ensure their emotional and mental well-being is not left behind.</li>
          <li>Life skills training and resilience-building sessions</li>
          <li>Safe spaces for students to express themselves</li>
          <li>Referrals to external psychological services when necessary</li>
        </ul>
        <p class="text-blackleading-relaxed">
          We aim to raise emotionally strong students who can cope, heal, and grow despite life’s challenges.
        </p>

      </div>

      <!-- Why It Matters -->
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-primary">Student Mentorship</h2>
        <p class="text-blackleading-relaxed">
            We believe in providing a strong support system for personal growth and future planning.
        </p>
        <p class="text-blackleading-relaxed">
            Our <span class="font-semibold">Student Mentorship</span> programme provides:
        </p>
        <ul class="list-disc list-inside text-blackspace-y-2">
          <li>Pairing students with liaison officers for regular one-on-one guidance</li>
          <li>Organizing school visits and mentorship sessions</li>
          <li>Helping students set realistic academic and personal goals</li>
          <li>Supporting career exploration and leadership development</li>
        </ul>
        <p class="text-blackleading-relaxed">
            We are committed  to nurture leadership, self believe and personal development to our beneficiaries.
        </p>

        <div class="flex justify-center mb-6">
        <img 
          src="@/assets/leap-logo.png" 
          alt="LEAP Logo" 
          class="w-40 md:w-56"
        />
      </div>
      <h2 class="text-2xl font-semibold text-primary">Life Experience and Preparation(LEAP)</h2>
        <p class="text-blackleading-relaxed">We believe in equipping learners with the tools to thrive beyond academics.</p>
        <p class="text-blackleading-relaxed">Our <span class="font-semibold">LEAP Programme</span> provides:</p>
        <p class="text-blackleading-relaxed">A tailor-made curriculum for Form 4 (KCSE), Form 5–6 (A-Levels), and students transitioning into local or international universities.</p>
        <p class="text-blackleading-relaxed">Training in three pillars:</p>
        <ul class="list-disc list-inside ml-5 text-blackspace-y-2">
          <li class="mb-2">Becoming a Better Person – focusing on personal presentation, dining etiquette, budgeting, time management, confidence, and positive habits.</li>
          <li class="mb-2">Becoming a People’s Person – building communication, empathy, conflict resolution, leadership, and teamwork skills.</li>
          <li class="mb-2">Building a Meaningful Career – enhancing digital literacy, online etiquette, personal branding, CV preparation, study skills, and pre-departure readiness.</li>
        </ul>
        <p class="text-blackleading-relaxed">We prepare students to face life with confidence, resilience, and purpose.</p>
      </div>
    </div>
  </section>
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
const MParagraph = ref("Our mentorship programme is designed to support our students in navigating their career paths and fostering their leadership skills.")

const pSHeading = ref("Psychosocial Support")
const pSParagraph = ref("Recognizing that many of our students come from challenging backgrounds, we understand that circumstances at home can greatly affect their mental well-being ")
</script>

<style scoped>

</style>