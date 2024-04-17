<template>
<div class="border-t-4 border-emerald-700 mb-4"></div>
<router-link
      :to="{ name: 'kcse' }">
        <h1 class="text-4xl mb-4 font-extrabold text-center">
          <span class="underline underline-offset-8 decoration-emerald-700 decoration-4"
            >KCSE To</span
          >p 100 Schools 2022/23
        </h1>
  </router-link>

  <div class="flex flex-col items-center justify-center py-20">
    <img src="@/assets/results.png" alt="" class="lg:w-1/2 md:w-4/5" />
    <img src="@/assets/results1.png" alt="" class="lg:w-1/2 md:w-4/5" />
    <img src="@/assets/25.png" alt="" class="lg:w-1/2 md:w-4/5" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
