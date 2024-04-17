<template>
    <div>


        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                    
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Elimisha</span>
                </a>
                <button @click="isMenuOpen = true" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link :to="{name: 'home'}" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{{ navItem1 }} </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'home'}" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{{ navItem2 }} </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'home'}" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{{ navItem3 }} </router-link>
                    </li>
                    
                </ul>
                </div>
                <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-10">
                        <div class="p-5 bg-white dark:bg-gray-900 border rounded shadow-sm">
                        <div class="flex items-center justify-between mb-4">
                            <div>
                            <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
                                                               
                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase dark:text-white" >Elimisha</span>
                            </a>
                            </div>
                            <div>
                            <button aria-label="Close Menu" title="Close Menu" @click="isMenuOpen = false"
                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24"> <path fill="currentColor"
                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                ></path>
                                </svg>
                            </button>
                            </div>
                        </div>
                        <nav class="">
                            <ul class="space-y-4">
                            <li class="hover:skew-x-6 duration-200 "><router-link :to="{name: 'home'}" @click="isMenuOpen = false" class="font-bold tracking-wide dark:text-white text-gray-700 transition-colors duration-200 "
                                active-class="dark:text-yellow-400 text-violet-900"> {{ navItem1 }} </router-link>
                            </li>
                            <li class="hover:skew-x-6 duration-200 "> <router-link :to="{name: 'home'}" @click="isMenuOpen = false" class="font-bold tracking-wide dark:text-white text-gray-700 transition-colors duration-200 "
                                active-class="dark:text-yellow-400 text-violet-900"> {{ navItem2 }} </router-link>
                            </li>
                            <li class="hover:skew-x-6 duration-200 "><router-link :to="{name: 'home'}" @click="isMenuOpen = false" class="font-bold tracking-wide dark:text-white text-gray-700 transition-colors duration-200 "
                                active-class="dark:text-yellow-400 text-violet-900">{{ navItem3 }}</router-link>
                            </li>
                            
                            
                            <li class="hover:scale-105 duration-300 ease-in-out"> <a href="#contact" @click="isMenuOpen = false" title="Sign up" aria-label="Sign up"
                                class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"    
                                > {{ cornerButton }} </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
            </div>
            
        </nav>

    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    data() {
        return {
            isMenuOpen: false,
            navItem1: "Home",
            navItem2: "About",
            navItem3: "FAQ",
        }
    },
}
</script>

<style lang="scss" scoped>

</style>