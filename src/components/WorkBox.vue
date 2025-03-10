<template>
  <div>
    <div>
      <div
        v-click-away="onClickAway"
        class="flex flex-wrap items-center justify-center">
        <!-- Buttons of Our Work -->
        <button
          @click="pop1 = !pop1"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-4 py-6 mb-4 ml-3 mt-10">
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              Identifying the Students</span
            >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white" />
            </svg>
          </div>
        </button>

        <div
          v-if="pop1"
          @click="closePopup"
          class="absolute bg-black bg-opacity-50 flex items-center justify-center">
          <div
            class="relative flex max-w-[48rem] flex-row bg-orange-600 bg-clip-border text-white font-serif shadow-md">
            <div class="p-6 mt-4 mb-4">
              <ul class="list-item">
                <li class="custom-bullet">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The program is focused on beneficiaries from needy backgrounds
                  identified by critical groups in society that provide us with
                  lists of potential students.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The program is focused on beneficiaries from needy backgrounds
                  identified by critical groups in society that provide us with
                  lists of potential students.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  We have identified three stakeholders who provide potential
                  beneficiaries:
                </li>

                <li class="custom-bullet ml-11 mt-2">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Primary schools
                </li>
                <li class="custom-bullet ml-11 mt-2">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Self-help groups (churches and community elders)
                </li>
                <li class="custom-bullet ml-11 mt-2">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  County offices
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Once potential beneficiaries have been identified they fill a
                  scholarship form which is submitted to the Foundation.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The submitted scholarship forms are reviewed and filtered by a
                  Scholarship Committee in charge of awarding scholarships to
                  deserving students
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Button for Meet the Parents -->
        <button
          @click="pop2 = !pop2"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-4 py-6 mb-4 ml-3 mt-10">
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              Meeting the Parents
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white" />
            </svg>
          </div>
        </button>

        <div
          v-if="pop2"
          @click="closePopup"
          class="absolute bg-black bg-opacity-50 flex items-center justify-center">
          <div
            class="relative flex max-w-[48rem] flex-row bg-orange-600 bg-clip-border text-white font-serif shadow-md">
            <div class="p-6 mt-4 mb-4">
              <ul class="list-item">
                <li class="custom-bullet">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  After the shortlisting process, the liaison officer contacts’
                  parents of the awarded students for notification of the
                  scholarship package and scheduling for one on one sessions.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The student liaison officer meets with the parent to guide and
                  clarify the scholarship terms as well as assure student
                  support through their high school education.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The parents is also required to consent the Foundations’
                  involvement in the students life. Consent allows the officer
                  access to student academic and financial records from the
                  school.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Consent is also required for the documentation of the
                  student’s journey in form of video recordings which are stored
                  as part of the student file.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Meeting the Students -->
        <button
          @click="pop3 = !pop3"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-7 py-6 mb-4 ml-3 mt-10">
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              Meeting the Students
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white" />
            </svg>
          </div>
        </button>
        <div
          v-if="pop3"
          @click="closePopup"
          class="absolute bg-black bg-opacity-50 flex items-center justify-center">
          <div
            class="relative flex max-w-[48rem] flex-row bg-orange-600 bg-clip-border text-white font-serif shadow-md">
            <div class="p-6 mt-4 mb-4">
              <ul class="list-item">
                <li class="custom-bullet">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Once the liaison officer has received parental consent, they
                  are now allowed to sit the student for a one on one session.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The key role of the liaison officer is to build the student’s
                  confidence and assure them that support will be sustained
                  through out the four years if the scholarship terms are met.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The liaison officer begins setting up a foundation of trust
                  with the student allowing the student a safe space to freely
                  express their concerns and needs without fear.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Meetings will be regularly held with the student to keep up
                  with academic and personal growth throughout the scholarship
                  period.
                </li>
              </ul>
            </div>
          </div>
        </div>


        <!-- Student Profle -->
        <button
          @click="pop5 = !pop5"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-4 py-6 mb-4 ml-3 mt-10">
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              Setting Student Profile
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white" />
            </svg>
          </div>
        </button>
        <div
          v-if="pop5"
          @click="closePopup"
          class="absolute bg-black bg-opacity-50 flex items-center justify-center">
          <div
            class="relative flex max-w-[48rem] flex-row bg-orange-600 bg-clip-border text-white font-serif shadow-md">
            <div class="p-6 mt-4 mb-4">
              <ul class="list-item">
                <li class="custom-bullet">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The student profile is created once the shortlisting process is complete.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The programme creates a profile for each of the identified
                  students providing information to enhance understanding of the
                  student and validating information provided on their current
                  circumstances and need for funding.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Student files are compiled both in hard copy and soft copy. We
                  have created an online database that allows us to upload all
                  necessary information and documentation with regard to a
                  student.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Our system enables detailed monitoring of student progress and
                  is accessible to donors with specified students
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The system provides information on:
                </li>
                <li class="custom-bullet ml-11 mt-2">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The students background
                </li>
                <li class="custom-bullet ml-11 mt-2">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Academic record
                </li>
                <li class="custom-bullet ml-11 mt-2">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Financial record
                </li>
                <li class="custom-bullet ml-11 mt-2">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Student videos/photos/extra activites
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Metting the Headteacher -->
        <button
          @click="pop4 = !pop4"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-4 py-6 mb-4 ml-3 mt-10">
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              Meeting the Headteacher
            </span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white" />
            </svg>
          </div>
        </button>
        <div
          v-if="pop4"
          @click="closePopup"
          class="absolute bg-black bg-opacity-50 flex items-center justify-center">
          <div
            class="relative flex max-w-[48rem] flex-row bg-orange-600 bg-clip-border text-white font-serif shadow-md">
            <div class="p-6 mt-4 mb-4">
              <ul class="list-item">
                <li class="custom-bullet">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  With consent from the parent and after meeting the student,
                  the liaison officer contacts the school administrator to for a
                  formal visit to the school.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  This visitation is aimed at validating parent consent of the
                  Foundation’s involvement in academic and financial matters in
                  concern with the student
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The headteacher’s role involves assigning a dedicated teacher
                  to the Foundation with to whom we will communicate and make
                  requests . The teacher is required to share termly fees
                  statements, termly report cards and receipts as well any extra
                  support the student may require.
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  In the spirit of loco parentis, the teacher will be required
                  to give a detailed termly report on the student's academic
                  progress.
                </li>
              </ul>
            </div>
          </div>
        </div>

          <!-- Folloowing up on Students -->
          <button
          @click="pop4 = !pop4"
          type="button"
          class="flex break-inside bg-teal-700 hover:bg-teal-400 border-gray-50 border-2 rounded-3xl px-4 py-6 mb-4 ml-3 mt-10">
          <div class="flex items-center justify-between flex-1">
            <span class="text-lg font-medium text-white mr-2">
              Following up on Students
            </span>
            <!----<svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 8.71423C0 8.47852 0.094421 8.25246 0.262491 8.08578C0.430562 7.91911 0.658514 7.82547 0.896201 7.82547H13.9388L8.29808 2.23337C8.12979 2.06648 8.03525 1.84013 8.03525 1.60412C8.03525 1.36811 8.12979 1.14176 8.29808 0.974875C8.46636 0.807989 8.6946 0.714233 8.93259 0.714233C9.17057 0.714233 9.39882 0.807989 9.5671 0.974875L16.7367 8.08499C16.8202 8.16755 16.8864 8.26562 16.9316 8.3736C16.9767 8.48158 17 8.59733 17 8.71423C17 8.83114 16.9767 8.94689 16.9316 9.05487C16.8864 9.16284 16.8202 9.26092 16.7367 9.34348L9.5671 16.4536C9.39882 16.6205 9.17057 16.7142 8.93259 16.7142C8.6946 16.7142 8.46636 16.6205 8.29808 16.4536C8.12979 16.2867 8.03525 16.0604 8.03525 15.8243C8.03525 15.5883 8.12979 15.362 8.29808 15.1951L13.9388 9.603H0.896201C0.658514 9.603 0.430562 9.50936 0.262491 9.34268C0.094421 9.17601 0 8.94995 0 8.71423Z"
                fill="white" />
            </svg>-->
          </div>
        </button>
        <div
          v-if="pop4"
          @click="closePopup"
          class="absolute bg-black bg-opacity-50 flex items-center justify-center">
          <div
            class="relative flex max-w-[48rem] flex-row bg-orange-600 bg-clip-border text-white font-serif shadow-md">
            <div class="p-6 mt-4 mb-4">
              <ul class="list-item">
                <li class="custom-bullet">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  Effective follow-ups are crucial for engaging students, parents, and teachers through direct communication like phone calls and meetings.
                  This process helps assess and monitor students’ academic and emotional progress, allowing for a better understanding of their well-being. 
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The student liaison office also organizes regular school visits to strengthen relationships within the educational community which includes teachers. 
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  These visits provide opportunities for our officers to connect with students at a personal level. 
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  By prioritizing follow-ups and visits, we not only foster personal development but also empower students to make informed educational choices, enhancing their emotional and social well-being
                </li>

                <li class="custom-bullet mt-4">
                  <svg
                    class="inline-block mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                  The liaison office plays a key role in ensuring students feel connected and supported throughout their academic journey.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      pop1: false,
      pop2: false,
      pop3: false,
      pop4: false,
      pop5: false,
    };
  },
  methods: {
    closePopup() {
      this.pop1 = false;
      this.pop2 = false;
      this.pop3 = false;
      this.pop4 = false;
      this.pop5 = false;
    },
    onClickAway() {
      this.closePopup();
    },
  },
};
</script>

<style lang="scss" scoped></style>
