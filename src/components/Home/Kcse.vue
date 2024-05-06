<template>
<div class="border-t-4 border-emerald-700 mb-4"></div>
<router-link
      :to="{ name: 'kcse' }">
        <h1 class="text-4xl mb-4 font-extrabold text-center">
          <span class="underline underline-offset-8 decoration-emerald-700 decoration-4"
            >Our Impac</span
          >t
        </h1>
        <div class="flex flex-wrap items-center  justify-center my-8">
        <div class="w-80 h-60 flex justify-center flex-col items-center border border-orange-600 rounded-lg m-2">
            <h1 class="mb-4 font-bold text-5xl">515</h1>
            <p class="mx-8">Students</p>
        </div>
        <div class="w-80 h-60 flex justify-center flex-col items-center border border-orange-600 rounded-lg m-2">
            <h1 class="mb-4 font-bold text-5xl">35</h1>
            <p class="mx-8">Counties</p>
        </div>
        <div class="w-80 h-60 flex justify-center flex-col items-center border border-orange-600 rounded-lg m-2">
            <h1 class="mb-4 font-bold text-5xl">179</h1>
            <p class="mx-8">Schools</p>
        </div>
    </div>
  </router-link>


</template>

<script setup></script>

<style lang="scss" scoped></style>
