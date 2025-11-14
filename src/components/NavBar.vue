<!----<template>
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
              :to="{ name: 'programmes' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform dark:text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              Our Programmes
            </router-link>

            <router-link
              :to="{ name: 'liaison' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform dark:text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              Office of Liaison
            </router-link>

            <!----<router-link
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
            </router-link>--

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
                exact-active-class="active-link"
              >
                What We Do

                <div
                  v-if="isHovered1"
                  class="absolute top-full left-0 bg-white shadow-md rounded-md w-40 z-50"
                >
                  <router-link
                    :to="{ name: 'liaison' }"
                    class="block px-4 py-2 hover:bg-emerald-700 hover:text-white rounded-t-md"
                  >
                    Office of Liaison
                  </router-link>
                  <router-link
                    :to="{ name: 'programmes' }"
                    class="block px-4 py-2 hover:bg-emerald-700 hover:text-white rounded-b-md"
                  >
                    Our Programmes
                  </router-link>
                </div>
              </router-link>-->


            <!----<router-link
              :to="{ name: 'programmes' /**name: 'programmes' */ }"
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
                  Academic Guardianship
                </router-link>
              </div>
            </router-link>--

            <router-link
              :to="{ name: 'friends' }"
              @mouseenter="isHovered2 = true"
              @mouseleave="isHovered2 = false"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform dark:text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              friends of elimisha
              <!----<router-link
                :to="{ name: 'friends' }"
                v-if="isHovered2"
                @click="goToFriends()"
                class="absolute top-full left-0 hover:bg-emerald-700 hover:text-white rounded-md p-1 w-36">
                Friends of Elimisha
              </router-link>--
            </router-link>

            <router-link
              :to="{ name: 'team' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              Our Team
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
            </router-link> --

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
            <!----<router-link
              :to="{ name: 'faq' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              FAQs
            </router-link>--
          </div>
        </div>

        <div class="block lg:hidden" @click.stop="openMenu = !openMenu">
          <i v-if="!openMenu" class="material-icons">menu</i>
          <i v-if="openMenu" class="material-icons">close</i>
        </div>
      </div>

      <!--Phone view--
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
            :to="{ name: 'programmes' /**name: 'programmes' */ }"
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
            Academic Guardianship
          </router-link>

          <router-link
            :to="{ name: 'gallery' }"
            class="mt-2 hover:bg-emerald-700 mx-20 rounded hover:text-white focus:text-white focus:bg-emerald-600 mb-1"
            @click="openMenu = !openMenu"
            exact
            exact-active-class="active-link">
            Gallery
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
          </router-link> --

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
          <router-link
              :to="{ name: 'team' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              Our Team
          </router-link>
            <router-link
              :to="{ name: 'faq' }"
              class="border-b-2 border-transparent focus:text-green-500 focus:border-red-700 hover:text-gray-800 transition-colors duration-300 transform text-gray-800 hover:border-blue-500 mx-4"
              exact
              exact-active-class="active-link">
              FAQs
          </router-link>
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

<style lang="scss" scoped></style>-->


<template>
  <header class="bg-white shadow-md py-7 fixed top-0 left-0 w-full z-50">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Clickable Logo -->
        <router-link to="/" class="flex items-center">
          <img src="@/assets/LogoFile.png" alt="Logo" class="w-full" />
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-4 text-gray-600 dark:text-black items-center relative">
          <router-link to="/" class="hover:text-emerald-600">Home</router-link>

          <!-- Dropdown Parent -->
          <!----<div class="relative" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <button class="hover:text-emerald-600 focus:outline-none">
              Our Programmes
            </button>
            <div
              v-show="showDropdown"
              class="absolute z-50 bg-white shadow-md rounded-md py-2 w-56 mt-2 text-sm border border-gray-100"
            >
              <router-link to="/programmes/financial-aid" class="block px-4 py-2 hover:bg-emerald-50">Financial Aid</router-link>
              <router-link to="/programmes/student-support" class="block px-4 py-2 hover:bg-emerald-50">Student Support</router-link>
              <router-link to="/programmes/academic-guardianship" class="block px-4 py-2 hover:bg-emerald-50">Academic Guardianship</router-link>
            </div>
          </div>-->

          <router-link to="/programmes" class="hover:text-emerald-600">Our Programmes</router-link>
          <router-link to="/liaison" class="hover:text-emerald-600">Office of Liaison</router-link>
          <router-link to="/friends" class="hover:text-emerald-600">Friends of Elimisha</router-link>
          <router-link to="/team" class="hover:text-emerald-600">Our Team</router-link>
          <router-link to="/tertiary" class="hover:text-emerald-600">Tertiary</router-link>
          <router-link to="/gallery" class="hover:text-emerald-600">Gallery</router-link>
          <router-link to="/contact" class="hover:text-emerald-600">Contact Us</router-link>
          <a
            href="https://elimishafoundation.org/"
            target="_blank"
            rel="noopener"
            class="hover:text-emerald-600"
          >
            Student Portal
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none text-gray-700">
          <svg v-if="!menuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div v-if="menuOpen" class="md:hidden bg-white px-4 pt-4 pb-6 space-y-3 shadow-md text-gray-700">
      <router-link to="/" class="block hover:text-emerald-600">Home</router-link>

      <!-- Mobile dropdown toggle -->
      <div>
        <button @click="mobileDropdownOpen = !mobileDropdownOpen" class="w-full text-left font-medium hover:text-emerald-600">
          Our Programmes
        </button>
        <div v-show="mobileDropdownOpen" class="ml-4 mt-2 space-y-2 text-sm">
          <router-link to="/programmes/financial-aid" class="block hover:text-emerald-600">Financial Aid</router-link>
          <router-link to="/programmes/student-support" class="block hover:text-emerald-600">Student Support</router-link>
          <router-link to="/programmes/academic-guardianship" class="block hover:text-emerald-600">Academic Guardianship</router-link>
        </div>
      </div>

      <router-link to="/liaison" class="block hover:text-emerald-600">Office of Liaison</router-link>
      <router-link to="/friends" class="block hover:text-emerald-600">Friends of Elimisha</router-link>
      <router-link to="/team" class="block hover:text-emerald-600">Our Team</router-link>
      
      <router-link to="/gallery" class="block hover:text-emerald-600">Gallery</router-link>
      <router-link to="/contact" class="block hover:text-emerald-600">Contact Us</router-link>
      <a
        href="https://elimishafoundation.org/"
        target="_blank"
        rel="noopener"
        class="block hover:text-emerald-600"
      >
        Student Portal
      </a>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      menuOpen: false,
      showDropdown: false,
      mobileDropdownOpen: false
    };
  },
  watch: {
    $route() {
      this.menuOpen = false;
      this.mobileDropdownOpen = false;
      this.showDropdown = false;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>