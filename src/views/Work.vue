<template>
  <section class="relative w-full bg-black text-white overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="../assets/WhatWeDo.jpeg"
        alt="What we do"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black bg-opacity-70"></div>
    </div>

    <!-- Foreground Content -->
    <div
      class="relative z-20 px-4 pt-36 pb-16 md:px-12 lg:px-24 flex flex-col items-center text-center"
    >
      <!-- Title -->
      <h1 class="text-3xl md:text-5xl font-bold">OUR WORK</h1>

      <!-- WorkBox Component -->
      <div class="w-full max-w-6xl">
        <WorkBox />
      </div>
    </div>
  </section>
</template>

<script>
import WorkBox from "../components/WorkBox.vue";

export default {
  components: {
    WorkBox,
  },
};
</script>
