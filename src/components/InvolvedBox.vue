<template>
    <div>

        <div 
        v-click-away="onClickAway"
        class="flex flex-wrap items-center mt-20 justify-center">
        <!-- The Foundation -->
        <button
          @click="pop1 = !pop1"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-7 py-6 mb-4 ml-3 mt-10"
        >
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              The Foundation
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
        <div
          v-if="pop1"
          @click="closePopup"
          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            class="relative flex max-w-[48rem] flex-row bg-white bg-clip-border text-black font-serif shadow-md"
          >
            <div class="p-6 mt-4 mb-4">
              <ul class="list-item">
                <li class="custom-bullet">
                  The Foundation is supporting it’s own students, fully funding
                  their secondary school education.​
                </li>
                <li class="custom-bullet mt-7 font-bold">
                  Service to our students;
                </li>

                <li class="custom-bullet mt-4">1. Financial support</li>

                <li class="custom-bullet mt-4">2. Academic mentorship</li>

                <li class="custom-bullet mt-4">3. Social skills development</li>

                <li class="custom-bullet mt-4">
                  4. Creation of digital student profiles
                </li>

                <li class="custom-bullet mt-4">
                  5. Documenting the students’ journey
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- The Supporter-->
        <button
          @click="pop2 = !pop2"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-7 py-6 mb-4 ml-5 mt-10"
        >
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              The Supporter
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
        <div
          v-if="pop2"
          @click="closePopup"
          class="absolute  bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            class="relative flex max-w-[48rem] flex-row bg-white bg-clip-border text-black font-serif shadow-md"
          >
            <div class="p-6 mb-4">
              <ul class="list-item">
                <li class="custom-bullet pt-10">
                  Elimisha Watoto Foundation partners with individuals willing to
                  <span class="font-bold">
                    provide financial assistance
                  </span>
                  to cater to the educational needs of students. Partners can choose to be known or remain anonymous.
                </li>


                <li class="custom-bullet mt-3 font-bold">CATERGORY A</li>

                <li class="custom-bullet mt-2">
                  <span class="font-bold"
                    >Supporters who have identified students</span
                  >
                  in need and require assistance from the Foundation to manage
                  the scholarship
                </li>

                <li class="custom-bullet mt-3 font-bold">CATERGORY B</li>

                <li class="custom-bullet mt-1">
                  <span class="font-bold"
                    >Supporters who are yet to identify students</span
                  >
                  in need and require assistance from Foundation in terms of;
                </li>

                <li class="custom-bullet mt-3 font-bold">
                  1. Student identification
                </li>

                <li class="custom-bullet mt-2 font-bold">
                  2. Scholarship management
                </li>

                <li class="custom-bullet mt-3 font-bold">
                  Service to our supporters;
                </li>

                <li class="custom-bullet mt-2">
                  1. All services apart from financial support to students
                </li>

                <li class="custom-bullet mt-1">
                  2. Provision of a unique username and password
                </li>

                <li class="custom-bullet mt-1">
                  3. Transparency and accountability of funds
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- The Parent -->
        <button
          @click="pop3 = !pop3"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-7 py-6 mb-4 ml-5 mt-10"
        >
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              The Parent
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white"
              />
            </svg>
          </div>
        </button>
        <div
          v-if="pop3"
          @click="closePopup"
          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div
            class="relative flex max-w-[48rem] flex-row bg-white bg-clip-border text-black font-serif shadow-md"
          >
            <div class="p-6 mt-4 mb-4">
              <ul class="list-item">
                <li class="custom-bullet">
                  Elimisha Watoto, partners with parents who have children in
                  high school that
                  <span class="font-bold">require an academic guardian.</span> ​
                </li>
                <li class="custom-bullet mt-7 font-bold">
                  Service to our Parents;
                </li>

                <li class="custom-bullet mt-4">
                  1. All services apart from financial support
                </li>

                <li class="custom-bullet mt-4">
                  2. A unique username and password
                </li>

                <li class="custom-bullet mt-4">
                  3. Freedom to decide whether or not to disclose financial
                  records
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
    setup () {
        return {}
    },
    data() {
    return {
      pop1: false,
      pop2: false,
      pop3: false,
    };
  },
  methods: {
    closePopup() {
      this.pop1 = false;
      this.pop2 = false;
      this.pop3 = false;
    },
    onClickAway() {
      this.closePopup();
    },
  },
}
</script>

<style lang="scss" scoped>

</style>