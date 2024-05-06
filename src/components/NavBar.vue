<template>
  <div class="relative z-50">
    <nav class="bg-white fixed w-full">
      <div
        class="container flex items-center justify-around py-1 mx-auto min-w-full text-gray-600 capitalize dark:text-black">
        <img src="@/assets/LogoFile.png" alt="" />
        <div class="hidden lg:block">
          <div class="flex">
            <router-link
              :to="{ name: 'home' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform dark:text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              Home
            </router-link>

            <router-link
              :to="{ name: 'AboutUs' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform dark:text-gray-800 hover:border-blue-500 mx-4"
              @mouseenter="isHovered = true"
              @mouseleave="isHovered = false"
              exact
              exact-active-class="active-link">
              Who We Are
              <router-link
                :to="{ name: 'team' }"
                v-if="isHovered"
                class="top-full left-0 absolute hover:bg-emerald-700 hover:text-white rounded-md p-1">
                Our Team
              </router-link>
            </router-link>

            <router-link
              :to="{ name: 'work' }"
              @mouseenter="isHovered1 = true"
              @mouseleave="isHovered1 = false"
              id="dropdownDelayButton"
              data-dropdown-toggle="dropdownDelay"
              data-dropdown-delay="500"
              data-dropdown-trigger="hover"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform dark:text-gray-800 hover:border-blue-500 relative mx-4"
              exact
              exact-active-class="active-link">
              What We Do

              <router-link
                :to="{ name: 'liaison' }"
                v
                v-if="isHovered1"
                class="absolute top-full left-0 hover:bg-emerald-700 hover:text-white rounded-md p-1 w-36">
                Office of Liason
              </router-link>
            </router-link>

            <router-link
              :to="{ name: 'involved' }"
              @mouseenter="isHovered2 = true"
              @mouseleave="isHovered2 = false"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform dark:text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              get involved
              <router-link
                :to="{ name: 'friends' }"
                v-if="isHovered2"
                @click="goToFriends()"
                class="absolute top-full left-0 hover:bg-emerald-700 hover:text-white rounded-md p-1 w-36">
                Friends of Elimisha
              </router-link>
            </router-link>

            <router-link
              :to="{ name: 'programmes' }"
              @mouseenter="isHovered3 = true"
              @mouseleave="isHovered3 = false"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              our programmes
              <div
                v-if="isHovered3"
                class="z-10 absolute bg-white bg-opacity-60 rounded-lg w-40 shadow">
                <router-link
                  :to="{ name: 'financial' }"
                  class="block hover:bg-emerald-700 hover:text-white rounded-md p-1">
                  Financial Aid
                </router-link>
                <router-link
                  :to="{ name: 'student' }"
                  class="block hover:bg-emerald-700 hover:text-white rounded-md p-1">
                  Support Student
                </router-link>
                <router-link
                  :to="{ name: 'AS' }"
                  class="block hover:bg-emerald-700 hover:text-white rounded-md p-1">
                  Academic Support
                </router-link>
              </div>
            </router-link>

            <router-link
              :to="{ name: 'gallery' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              Gallery
            </router-link>

            <!--<router-link
              :to="{ name: 'news' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              News & Updates
            </router-link>-->

            <!-- <router-link
              :to="{ name: 'faq' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform dark:text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              FAQs
            </router-link> -->

            <router-link
              :to="{ name: 'contact' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              Contact Us
            </router-link>
            <a
              href="https://elimishafoundation.org/"
              target="_blank"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              Student Portal
            </a>
          </div>
        </div>

        <div class="block lg:hidden" @click.stop="openMenu = !openMenu">
          <i v-if="!openMenu" class="material-icons">menu</i>
          <i v-if="openMenu" class="material-icons">close</i>
        </div>
      </div>

      <!--Phone view-->
      <div
        v-if="openMenu"
        v-click-away="onClickAway"
        class="block lg:hidden z-70 w-full h-screen rounded">
        <div class="flex flex-col text-center">
          <router-link
            :to="{ name: 'home' }"
            @click="openMenu = !openMenu"
            class="hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            exact
            exact-active-class="active-link">
            Home
          </router-link>

          <router-link
            :to="{ name: 'AboutUs' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Who Are We
          </router-link>

          <router-link
            :to="{ name: 'team' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Our Team
          </router-link>

          <router-link
            :to="{ name: 'work' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            What We Do
          </router-link>

          <router-link
            :to="{ name: 'liaison' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Office of Liaison
          </router-link>

          <router-link
            :to="{ name: 'involved' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Get Involved
          </router-link>

          <router-link
            :to="{ name: 'friends' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Friends of Elimisha
          </router-link>

          <router-link
            :to="{ name: 'programmes' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Our Programmes
          </router-link>

          <router-link
            :to="{ name: 'financial' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Financial Aid
          </router-link>

          <router-link
            :to="{ name: 'student' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Support Student
          </router-link>

          <router-link
            :to="{ name: 'AS' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Accademic Support
          </router-link>

          <router-link
            :to="{ name: 'gallery' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Gallery
          </router-link>

          <!----<router-link
            :to="{ name: 'news' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            News & Updates
          </router-link>-->

          <!-- <router-link
            :to="{ name: 'faq' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            FAQs
          </router-link> -->

          <router-link
            :to="{ name: 'contact' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-2"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Contact Us
          </router-link>
          <a
            href="https://elimishafoundation.org/"
            target="_blank"
            :to="{ name: 'contact' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-2"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Student Portal
          </a>
        </div>
      </div>

      <hr class="h-px bg-orange-500 border-2 dark:bg-gray-700" />
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      openMenu: false,
      isHovered: false,
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      // dropOpen: false,
      // isHovered: false,
    };
  },

  methods: {
    onClickAway() {
      this.openMenu = false;
    },

    // startHover(){
    // this.isHovered = true;
    // this.dropOpen = !this.dropOpen
    // },
    // endHover(){
    //   this.isHovered = true;

    // },
    //     dropdownPosition() {
    //   const linkElement = document.querySelector('.active-link');
    //   if (linkElement) {
    //     const rect = linkElement.getBoundingClientRect();
    //     return rect.left;
    //   }
    //   return 0;
    // },
  },
};
</script>

<style lang="scss" scoped></style>
