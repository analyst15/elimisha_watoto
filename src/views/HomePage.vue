<template>
  <div>
    <!-- forked from: https://codepen.io/cuonoj/pen/JjPmMaB -->

    <!-- <section
      class="relative h-screen flex flex-col items-center justify-center text-center text-white"
    >
      <div
        class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden"
      >
        <video
          class="min-w-full min-h-full absolute object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/elimisha-watoto.appspot.com/o/pexels-swisshumanity-6168921%20(2160p).mp4?alt=media&token=b41058ad-94ba-4a72-a89a-4964c8036059"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video>
      </div>
      <div class="video-content space-y-2 z-10">
        <h1 class="font-light text-6xl">Welcome to Elimisha Watoto</h1>
        <h3 class="font-light text-3xl"></h3>
      </div>
    </section>-->
    <div
      class="relative bg-[length:1100px_950px] lg:bg-[length:1500px_1000px] bg-left h-2/3 pt-64 bg-fixed"
      style="
        background-image: url('https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D');
        background-position: center;
      "
    >
    <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="relative pl-4 md:pl-20 text-white pb-40">
        <span class="font-bold text-4xl lg:text-8xl">Elimisha Watoto Foundation</span>
        <p class="text-2xl italic">Educate a Child, Transform a Nation</p>

        <!-- CTA Buttons -->
        <!----<div class="mt-6 flex">
          <a
            href="/contact"
            class="bg-orange-500 hover:bg-emerald-700 text-white py-3 px-20 rounded-lg text-2xl transition duration-300"
          >
            DONATE
          </a>
        </div>-->
      </div>
    </div>

    <Card />
    <Band />
    <!---<Values />-->
    <Programs />
    <Slider />
  </div>
</template>

<script>
import Card from "../components/Home/Card.vue";
import Band from "../components/Home/Band.vue";
import Values from "../components/Home/Values.vue";
import Programs from "../components/Home/Programs.vue";
import Slider from "../components/Home/Slider.vue";
import Kcse from "../components/Home/Kcse.vue";

export default {
  components: {
    Card,
    Band,
    Values,
    Programs,
    Slider,
    Kcse,
  },
};
</script>

<style>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
</style>