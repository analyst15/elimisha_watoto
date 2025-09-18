<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-semibold text-teal-600 mb-4">{{ title }}</h2>
    <div
      v-for="(item, index) in questions"
      :key="index"
      class="border-b last:border-b-0 py-4"
    >
      <button
        @click="toggle(index)"
        class="w-full text-left text-lg font-medium text-gray-800 flex justify-between items-center"
      >
        {{ item.question }}
        <span class="ml-2 text-teal-500">
          <svg
            v-if="openIndex !== index"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        </span>
      </button>
      <transition name="fade">
        <p
          v-show="openIndex === index"
          class="mt-2 text-black text-lg leading-relaxed"
        >
          {{ item.answer }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    questions: Array,
  },
  data() {
    return {
      openIndex: null,
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
