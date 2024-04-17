<template>
  <div class="overflow-hidden">
    <!-- component -->
    <footer
      class="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 overflow-hidden"
    >
      <div
        class="flex flex-col flex-wrap max-w-screen-xl px-10 py-9 mx-auto sm:px-6 lg:px-8"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3">
          
          
          <div>
            <img src="@/assets/logo.png" alt="logo" class=""/>
            <p class="max-w-xs mt-4 text-sm text-white">
              Educate a child, transform a nation.
            </p>
            <div class="flex mt-8 space-x-6 text-white">
              <a class="hover:opacity-75" href="https://www.linkedin.com/in/elimisha-watoto-foundation-b26b972a0/edit/forms/contact-info/new/?profileFormEntryPoint=PROFILE_TOP_CARD_EDIT_FORM" target="_blank" rel="noreferrer">
                <svg 
                  class="w-6 h-6 text-gray-800 dark:text-white" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  >
                    <path fill-rule="evenodd" 
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
                   <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                  </svg>
                </a>
            </div>
          </div>




          <div
            class="mx-4 grid grid-cols-1 gap-4 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <p class="text-xl font-medium">Contact Us</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
                <p>
                  Email:
                  <a class="hover:opacity-75" href="mailto:info@elimishawatoto.org"> info@elimishawatoto.org </a>
                </p>
                <p>Phone: <a class="hover:opacity-75" href="tel:+254 753 343 152"> +254 753 343 152 </a></p>
                <p>
                  Location: 3rd Floor, Woodvale Place Woodvale Grove, Westlands,
                  Nairobi
                </p>
              </nav>
            </div>
            <div>
              <p class="text-xl font-medium">Quick Links</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a @click="goToHome()" class="hover:opacity-75" href="">
                  Home
                </a>
                <a @click="goToAbout()" class="hover:opacity-75" href>
                  Who We Are
                </a>
                <a @click="goToWork()" class="hover:opacity-75" href>
                  What We Do
                </a>
                <a @click="goToInvolved()" class="hover:opacity-75" href>
                  Get Involved
                </a>
                <a @click="goToProgrammes()" class="hover:opacity-75" href>
                  Our Programmes
                </a>
                <a @click="goToFAQs()" class="hover:opacity-75" href> FAQs </a>
              </nav>
            </div>
            <div>
              <p class="text-xl font-medium">Our Location</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm">
                <div class="md:block hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.683673920301!2d36.80307799116752!3d-1.267658744881094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17155bc87d13%3A0xc8aec5a75ccd330e!2sWoodvale%20Place%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1709373114541!5m2!1sen!2ske"
                    width="350px"
                    height="300"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div class="block md:hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.683673920301!2d36.80307799116752!3d-1.267658744881094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17155bc87d13%3A0xc8aec5a75ccd330e!2sWoodvale%20Place%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1709373114541!5m2!1sen!2ske"
                    width="300"
                    height="300"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <p class="mt-8 text-xl font-medium text-gray-800">© 2021 by Elimisha Foundation.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import router from "../plugins/router.js";

export default {
  setup() {
    return {};
  },
  methods: {
    goToHome() {
      router.push("/");
    },
    goToAbout() {
      router.push("/about");
    },
    goToWork() {
      router.push("/work");
    },
    goToInvolved() {
      router.push("/involved");
    },
    goToProgrammes() {
      router.push("/programmes");
    },
    goToFAQs() {
      router.push("/faq");
    },
    goToContact() {
      router.push("/contact");
    },
  },
};
</script>

<style lang="scss" scoped></style>
./Footer.vue/index.js
