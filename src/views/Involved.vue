<template>
  <div>
    <!-- <div class="overflow-hidden h-full w-full bg-cover items-center " style="background-image: url('../assets/ourwork.jpg');"> -->

    <img
      class="h-screen object-cover"
      src="../assets/friendsin.jpg"
      alt="image description"/>

    <div
      class="absolute inset-0 py-5 h-full bg-opacity-70 bg-black"
    >
      <h1 class="mt-40 text-white font-semibold text-5xl  text-center">
        OUR PILLARS
      </h1>

      <div class=" hidden md:block">
      <InvolvedBox/>
    </div>

    <div class=" block md:hidden">
    <InvolvedBox/>
  </div>

    </div>

    

    
  </div>

  <!-- </div> -->
</template>

<script>
import InvolvedBox from "../components/InvolvedBox.vue";

export default {
  setup() {
    return {};
  },
  data() {
    return {
    }
  },
  components: {
      InvolvedBox,
    },
};
</script>

<style lang="scss" scoped></style>
