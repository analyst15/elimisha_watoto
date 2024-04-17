<template>
                    <h1 class="text-4xl mb-4 font-extrabold text-center"><span class="underline underline-offset-8 decoration-emerald-700 decoration-4">Did </span>you know</h1>

    <div class=" py-20">
        <Swiper :modules="[ Autoplay, Pagination, Navigation]" effect="fade" 
                :grab-cursor="true"
                :loop="true"
                :autoplay="{
                    delay: 3500,
                    disableOnInteraction: false,
                    }"
                :pagination="{
                    clickable: true,
                    }"
                >
            <SwiperSlide v-for="did in didYouKnow" :key="did.id" class="mb-20">
                <div class="flex flex-col">
                    <h1>{{ did.text }}</h1>
                    <a :href="did.link" class="link">Read more</a>
                </div>
                
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css"
import { ref } from "vue";
import { EffectCube, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/effect-cube"


const didYouKnow = ref([
        {id: 1,text:"Rural areas are severely hit when it comes to secondary education in Kenya.", link: "https://www.kevmrc.com/kenya-education-facts"},
        {id: 2,text:"There are more than one million Kenyan children that are still out of school.", link:"https://www.nationmaster.com/country-info/stats/Education/Children-out-of-school,-primary"},
        {id: 3,text:"Hundreds of thousands of learners have been dropping out of the education system annually despite the much-hyped 100 per cent transition policy introduced by the government in 2017.", link:"https://allafrica.com/stories/202109210091.html"},
])
</script>

<style scoped>
.swiper {
  width: 800px;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.link {
    color: #3498db; /* Change link color to blue for visibility */
    text-decoration: underline; /* Add underline for visibility */
  }
@media screen and (max-width: 600px) {
    .swiper {
        width: 300px;
    }
}

</style>