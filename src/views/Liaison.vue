<template>

<!-- Hero Section: Fullscreen Image Slider -->
<section class="w-full h-screen pt-20">
  <div class="absolute inset-0 z-10 mt-24 flex items-center justify-center">
    <WorkBox />
  </div>

  <!-- Swiper Slideshow -->
<Swiper
  :modules="[Autoplay, Pagination, Navigation]"
  :grab-cursor="true"
  :loop="true"
  :autoplay="{ delay: 4500, disableOnInteraction: false }"
  :spaceBetween="30"
  :effect="'fade'"
  :navigation="true"
  :pagination="{ clickable: true }"
  class="w-full h-full"
>
  <SwiperSlide>
    <div class="relative w-full h-full">
      <img
        src="@/assets/office-of-liaison.jpg"
        alt="Liaison Office"
        class="w-full h-full object-cover object-top"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="relative w-full h-full">
      <img
        src="@/assets/office-of-liaison-2.jpg"
        alt="Liaison Visit"
        class="w-full h-full object-cover object-top"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div class="relative w-full h-full">
      <img
        src="@/assets/office-of-liaison-3.jpg"
        alt="Student Mentorship"
        class="w-full h-full object-cover object-top"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  </SwiperSlide>
</Swiper>

</section>
  <div class="px-4 md:px-8 lg:px-16 xl:px-32 pb-10">
    <div class="py-5 text-center font-bold font-sans text-4xl text-black">
      The Student Liaison Office: Guiding Students to Success
    </div>
    <!-- Office of Liaison -->
    <div class="justify-center items-center font-sans">
      <div class=" ">
        <div class="mt-3">
          <span class="text-black font-bold text-xl">
            Who is a Student Liaison Officer?
          </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >A Student Liaison Officer is a dedicated guide and personal supporter who walks with each student throughout
            their academic journey. They serve as a mentor, motivator, and bridge between the student and the Elimisha
            Watoto Foundation.
          </span>
        </div>

        <div class="mt-6">
          <span class="text-black font-bold text-xl">
            Why the Student Liaison Office Matters
          </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >The Student Liaison Office is a vital link between the Foundation and the children we serve. It ensures that
              every sponsored child is seen, heard, and supported in a holistic way.
          </span>
        </div>

        <div class="mt-6">
          <span class="text-black font-bold text-xl">
            The Role of the Student Liaison Office
          </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >The Student Liaison Office plays a crucial role in Elimisha Watoto
            Foundation by serving as a vital link between the foundation and the
            students it supports.
          </span>
          <p class="text-black leading-relaxed">
          The <span class="font-semibold">Student Liaison</span> Office is the heartbeat of our student engagement
          </p>
          <p class="text-black leading-relaxed">
          Our liaison officers:
          </p>
          <ul class="list-disc list-inside text-black space-y-2">
          <li>Track academic progress and intervene when needed</li>
          <li>Build personal bonds through regular school visits</li>
          <li>Act as mentors and motivators</li>
          <li>Advocate for student needs within the Foundation</li>
          <li>Ensure that every child’s voice is heard, and every success celebrated</li>
          </ul>
          <p class="text-black leading-relaxed">
          Their work ensures our support is not just a system, but a relationship built on trust, care, and a shared dream for
          a better future.
          </p>
        </div>
      </div>
    </div>

    <!-- Key Importances -->
    <!----<div class="mt-5 text-center font-bold font-sans text-4xl text-teal-700">
      Roles of Liaison officers
    </div>
    <div class="justify-center items-center font-sans py-8">
      <div class=" ">
        <div class="mt-6">
          <span class="text-black font-bold text-xl">
            1. Academic Monitoring:
          </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >The office ensures that the academic progress of students is
            closely monitored, helping to identify any challenges they may face
            and providing timely interventions.
          </span>
        </div>

        <div class="mt-6">
          <span class="text-black font-bold text-xl">
            2. Mentorship and Guidance:
          </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >Through school visits and mentorship programs, the Student Liaison
            Office fosters a supportive relationship with students. This
            guidance helps in personal development, educational choices, and
            overall well-being.
          </span>
        </div>

        <div class="mt-6">
          <span class="text-black font-bold text-xl"> 3. Building Bonds: </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >By establishing strong bonds with students, the liaison office
            creates a sense of trust and connection. This can lead to better
            communication and a deeper understanding of the needs and
            aspirations of the students.
          </span>
        </div>
        <div class="mt-6">
          <span class="text-black font-bold text-xl">
            4. Motivation and Support:
          </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >Serving as a source of motivation, the office encourages students
            to overcome obstacles and pursue their goals. This support is vital
            for maintaining a positive and empowering educational environment.
          </span>
        </div>
        <div class="mt-6">
          <span class="text-black font-bold text-xl">
            5. Goal Setting and Achievement:
          </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >The Student Liaison Office actively assists students in setting
            realistic goals and works with them to actualize these objectives.
            This can contribute to long-term success and personal development.
          </span>
        </div>
        <div class="mt-6">
          <span class="text-black font-bold text-xl"> 6. Advocacy: </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >The liaison office may act as an advocate for students within the
            foundation, ensuring that their needs and concerns are heard and
            addressed at the organizational level.
          </span>
        </div>
        <div class="mt-6">
          <span class="text-black font-bold text-xl">
            7. Enhancing Foundation's Impact:
          </span>
        </div>

        <div class="mt-2">
          <span class="text-black"
            >Through effective student support, the liaison office contributes
            to the overall success and impact of the Elimisha Watoto Foundation,
            as the academic achievements and personal growth of students reflect
            positively on the foundation's mission and goals.
          </span>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script setup>
import WorkBox from "../components/WorkBox.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ref } from "vue";
import {
  EffectFade,
  EffectCube,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
</script>

<style lang="scss" scoped></style>
