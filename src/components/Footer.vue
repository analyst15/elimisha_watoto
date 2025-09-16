<template>
  <!----<div class="overflow-hidden">
    <!-- component --
    <footer
      class="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 overflow-hidden"
    >
      <div
        class="flex flex-col flex-wrap max-w-screen-xl px-10 py-9 mx-auto sm:px-6 lg:px-8"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3">
          
          
          <div>
            <img src="@/assets/ElimishaWatotoLogoWhite.png" alt="logo" class=""/>
            <!----<p class="max-w-xs mt-4 text-sm text-white">
              Educate a child, transform a nation.
            </p>--
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
                
                <a class="hover:opacity-75" href="https://www.linkedin.com/in/elimisha-watoto-foundation-b26b972a0/edit/forms/contact-info/new/?profileFormEntryPoint=PROFILE_TOP_CARD_EDIT_FORM" target="_blank" rel="noreferrer">
                <svg 
                  class="w-5 h-5 text-gray-800 dark:text-white" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  fill="currentColor" 
                  viewBox="0 0 448 512"
                  >
                    <path fill-rule="evenodd" 
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" clip-rule="evenodd"/>
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
                <a @click="goToHome()" class="hover:opacity-75" href="/">
                  Home
                </a>
                <a @click="goToAbout()" class="hover:opacity-75" href="/about">
                  Who We Are
                </a>
                <a @click="goToWork()" class="hover:opacity-75" href="/work">
                  What We Do
                </a>
                <a @click="goToInvolved()" class="hover:opacity-75" href="/involved">
                  Get Involved
                </a>
                <a @click="goToProgrammes()" class="hover:opacity-75" href="/programmes">
                  Our Programmes
                </a>
                <a @click="goToFAQs()" class="hover:opacity-75" href="faqs"> FAQs </a>
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
        <p class="mt-8 text-xl font-medium text-gray-800">© 2024 | Elimisha Watoto Foundation.</p>
      </div>
    </footer>
  </div>-->
    <footer class="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 overflow-hidden">
    <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div class="text-teal-600">
            <img src="@/assets/ElimishaWatotoLogoWhite.png" alt="logo" class="w-64"/>
          </div>
          <ul class="mt-8 flex gap-6">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100095380491032"
                rel="noreferrer"
                target="_blank"
                class="text-white transition hover:opacity-75"
              >
                <span class="sr-only">Facebook</span>
  
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
  
            <li>
              <a
                href="https://www.instagram.com/friendsofelimisha/"
                rel="noreferrer"
                target="_blank"
                class="text-white transition hover:opacity-75"
              >
                <span class="sr-only">Instagram</span>
  
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
  

          </ul>
        </div>
  
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          <div>
            <p class="font-medium text-xl text-black">Quick Links</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a @click="goToHome()" class="hover:opacity-75" href="/">
                  Home
                </a>
                <a @click="goToAbout()" class="hover:opacity-75" href="/about">
                  Who We Are
                </a>
                <a @click="goToWork()" class="hover:opacity-75" href="/work">
                  What We Do
                </a>
                <a @click="goToInvolved()" class="hover:opacity-75" href="/involved">
                  Get Involved
                </a>
                <a @click="goToProgrammes()" class="hover:opacity-75" href="/programmes">
                  Our Programmes
                </a>
                <a @click="goToFAQs()" class="hover:opacity-75" href="faqs"> FAQs </a>
              </nav>
            </ul>
          </div>
  
          <div>
            <p class="font-medium text-xl text-black">Contact Us</p>
  
            <ul class="mt-6 space-y-4">
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
            </ul>
          </div>
  
          <div>
            <p class="font-medium text-xl text-black">Our Location</p>
  
            <ul class="mt-6 space-y-4 text-sm">
              <nav class="flex flex-col mt-4 space-y-2 text-sm">
                <div class="md:block hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8473343436935!2d36.80341561118062!3d-1.2640852454018978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178060c0d21b%3A0x586aa06fbf3d0b37!2sElimisha%20Watoto%20Foundation!5e0!3m2!1sen!2ske!4v1758011741680!5m2!1sen!2ske"
                    width="300px"
                    height="300"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div class="block md:hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8473343436935!2d36.80341561118062!3d-1.2640852454018978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178060c0d21b%3A0x586aa06fbf3d0b37!2sElimisha%20Watoto%20Foundation!5e0!3m2!1sen!2ske!4v1758011741680!5m2!1sen!2ske"
                    width="300"
                    height="300"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </nav>
            </ul>
          </div>
        </div>
      </div>
  
      <p class="text-base  text-black">&copy; 2025. Elimisha Watoto Foundation. All rights reserved.</p>
    </div>
  </footer>
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

<style scoped>



</style>




