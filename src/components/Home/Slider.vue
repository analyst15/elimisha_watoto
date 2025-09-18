<template>
                    <h1 class="text-4xl mb-4 font-extrabold text-center">Di<span class="underline underline-offset-8 decoration-emerald-700 decoration-4">d you k</span>now</h1>

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
        {id: 1,text:"As of 2023, an estimated 8.5% of school-aged children, or over one million children, are not enrolled in school.", link: "https://www.nationmaster.com/country-info/stats/Education/Children-out-of-school,-primary"},
        {id: 2,text:"Secondary schools are facing significant financial challenges, which threatens the smooth administration of national examinations and overall school operations.", link:"https://www.kevmrc.com/kenya-education-facts"},
        {id: 3,text:"Factors such as poverty, lack of school fees, and inadequate infrastructure have resulted in continued school dropouts, particularly among marginalized communities.", link:"https://allafrica.com/stories/202109210091.html"},
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