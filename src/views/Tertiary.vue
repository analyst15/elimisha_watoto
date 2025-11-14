<template>
    <div class="max-w-6xl mx-auto px-6 pt-28">
        <div class="flex justify-center mb-3">
            <img src="@/assets/tertiary/logo.png" alt="Tertiary Logo" class="w-96 md:w-96" />
        </div>
        <header class="text-center pb-8 border-b-2 border-blue-500">
            <h1 class="text-3xl md:text-4xl font-sans font-semibold text-gray-900">Elimisha Watoto Tertiary (EWT)</h1>
            <p class="mt-2 text-sm md:text-base text-black italic">One Step Higher in Your Educational Journey</p>
        </header>

        <section class="bg-white max-w-7xl mx-auto p-10 px-4 sm:px-6 lg:px-4 mb-12">
            <p>
                At Elimisha Watoto Tertiary, we empower bright and deserving students to take "One Step Higher" in their
                educational journey.
            </p>
            <p>
                As a department under the Elimisha Watoto Foundation, we support high school graduates transitioning
                into
                universities, colleges and technical institutions through academic scholarships, mentorship, career
                guidance and
                professional development.
            </p>
        </section>

        <section class="mt-10">
            <h2 class="text-2xl font-semibold text-center text-gray-900">Our Five Key Pillars</h2>

            <div class="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <article v-for="pillar in pillars" :key="pillar.id"
                    class="bg-gray-50 rounded-lg p-5 border-l-4 border-emerald-700 shadow-sm">
                    <h3 class="text-lg font-medium text-emerald-700">{{ pillar.title }}</h3>
                    <p class="mt-2 text-base text-black leading-relaxed">{{ pillar.description }}</p>
                </article>
            </div>
        </section>

        <section class="mt-10 bg-blue-50 rounded-lg p-6">
            <h2 class="text-xl font-semibold text-gray-900">Our Core Values</h2>
            <p class="mt-3 text-black leading-relaxed">
                We are driven by core values of integrity, respect, accountability, safeguarding, inclusivity,
                empowerment and
                excellence. We nurture well-rounded young people ready to transform their communities and the world at
                large.
            </p>
        </section>

        <footer class="mt-8 text-center py-6">
            <p class="text-lg font-semibold text-emerald-700">
                Together we educate, empower, ignite potential and purpose to inspire the changemakers of tomorrow.
            </p>
        </footer>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const pillars = reactive([
  {
    id: 1,
    title: 'Access to Education',
    description:
      'We break financial barriers by providing scholarships and support, ensuring every deserving student can pursue tertiary education with dignity and focus.'
  },
  {
    id: 2,
    title: 'Mentorship & Life Skills',
    description:
      'Through guidance and personal development sessions, we equip students with confidence and resilience to thrive in life and learning.'
  },
  {
    id: 3,
    title: 'Collaboration & Partnerships',
    description:
      'By uniting with institutions, partners and Friends of Elimisha, we build a strong network of support that amplifies impact and nurtures shared success.'
  },
  {
    id: 4,
    title: 'Career Guidance',
    description:
      'We help students discover their potential, align their passions with purpose and make informed decisions for meaningful career paths.'
  },
  {
    id: 5,
    title: 'Professional Development',
    description:
      'We prepare our beneficiaries for the world of work through skills development and provision of continuous learning opportunities that foster excellence and employability.'
  }
])
</script>

<!-- Tailwind handles styling; no scoped CSS required. -->
