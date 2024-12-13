<template>
  <div>
    <img
      class="h-screen w-full "
      src="../assets/WhatWeDo.jpeg"
      alt="image description" />
    <div>
      <div
        class="absolute inset-0  py-5 bg-opacity-70 bg-black h-full">
        <h1 class="mt-40 text-white font-semibold text-5xl  text-center">
          OUR WORK
        </h1>
        <!----<h1
          class="text-white mt-4 text-center justify-center p-8 mx-11 md:ml-40 md:mr-40">
          The Elimisha Watoto Foundation provides comprehensive secondary school
          scholarships to academically promising, yet financially disadvantaged
          students. Through the help of a Student Liaison Officer, we are able
          to keep track of our students performance and ensure that through
          mentorship programs the students navigate their transition from
          adolescence to young adulthood.
        </h1>-->
        
        <div class=" hidden md:block">
        <WorkBox />
      </div>
      </div>

      <div class=" block md:hidden bg-teal-400">
      <WorkBox />
    </div>
    </div>
  </div>
</template>

<script>
import WorkBox from "../components/WorkBox.vue";
export default {
  setup() {
    return {};
  },
  data() {
    return {};
  },
  components: {
    WorkBox,
  },
};
</script>

<style lang="scss" scoped></style>
