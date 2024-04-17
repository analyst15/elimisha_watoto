<template>
  <div>
    <NavBar />
  

  <div class="">
    <router-view />
  </div>
  <Footer />
  <div></div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  setup() {
    return {};
  },

  components: {
    NavBar,
    Footer,
  },
};
</script>
