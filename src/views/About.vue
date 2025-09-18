<template>
  <!-- Background Image and video -->
  <!----<section class="h-96 md:h-screen flex flex-col items-center justify-center">
    <div class="relative">
      <video
        class="object-cover mx-auto md:py-20  md:3/4"
        src="https://firebasestorage.googleapis.com/v0/b/travelapp-23e4c.appspot.com/o/Elimisha%20Watoto.mp4?alt=media&token=03d5f959-0985-4185-bf55-86c640d74c48"
        type="video/mp4"
        autoplay
        controls
        loop>
      </video>
      <!----<video
        class="object-cover mx-auto  md:py-20  md:3/4"
        src="https://firebasestorage.googleapis.com/v0/b/elimisha2-f0d66.appspot.com/o/Who%20We%20Are.mp4?alt=media&token=64dd0e1c-33fd-4571-acb9-863b672cc9e6"
        type="video/mp4"
        autoplay
        controls
        loop>
      </video>-->
  <!----<iframe width="1280" height="720" src="https://www.youtube.com/embed/FAsGwlDGHZk"
        title="The Story of Elimisha Watoto Foundation" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>--
    </div>
  </section>-->
  <div>
    <!-- About Us component -->
    <section class="bg-white max-w-7xl mx-auto p-10 px-4 sm:px-6 lg:px-4 mb-12">
      <article>
        <h2 class="text-4xl font-extrabold text-center my-2 md:my-9 text-gray-900">
          WHO WE ARE
        </h2>

        <!--our story-->
        <section class="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
          <article
            class="relative w-full h-auto group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <img class="absolute inset-0 object-cover w-full h-full" src="../assets/kid-about.png"
              alt="image description" />
            <div class="absolute inset-0 bg-black bg-opacity-70 transition duration-300 ease-in-out"></div>
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 class="text-center">
                <a class="text-white text-xl font-bold text-center" href="#">
                  <span class="absolute inset-0"></span>
                  Who we are
                </a>
                <p class="text-white text-sm p-4">
                  Elimisha Watoto Foundation is a registered nongovernmental
                  organization based in Kenya,
                  dedicated to transforming the lives of vulnerable
                  children. We exist to bridge the gap in access to
                  education by providing holistic support including
                  quality learning opportunities, psychosocial care, and
                  mentorship. Our commitment is rooted in the belief
                  that every child, regardless of their background or
                  circumstances, has the right to learn, grow, and reach
                  their full potential.
                </p>
              </h3>
            </div>
          </article>

          <!--our focus-->
          <article
            class="relative w-full h-auto pt-10 pb-10 group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <img class="absolute inset-0 object-cover w-full h-full" src="../assets/kid-about.png"
              alt="image description" />
            <div class="absolute inset-0 bg-black bg-opacity-70 transition duration-300 ease-in-out"></div>
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex  items-center">
              <h3 class="text-center">
                <a class="text-white text-xl font-bold text-center" href="#">
                  <span class="absolute inset-0"></span>
                  What we do
                </a>
                <p class="text-white text-sm p-4">
                  At Elimisha Watoto Foundation, we create pathways
                  for vulnerable children to access education and
                  holistic development. Our programs are designed to
                  remove barriers that hinder learning by:
                </p>
                <ul class="mx-8 text-sm list-disc list-outside text-white text-left">
                  <li>Providing educational support, including
                    school fees, uniforms, and learning
                    materials</li>
                  <li>Offering psychosocial services such as
                    counseling, trauma care, and emotional
                    support</li>
                  <li>Facilitating mentorship and life skills
                    training to nurture confidence, resilience,
                    and purpose</li>
                  <li>Engaging families and communities to build
                    supportive environments around each child</li>
                </ul>
                <p class="text-white text-sm p-4">Through these interventions, we empower children
                  not only to stay in school but to succeed, thrive, and
                  envision a brighter future.</p>
              </h3>
            </div>
          </article>

          <!--our objective-->
          <article
            class="relative w-full h-auto group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <img class="absolute inset-0 object-cover w-full h-full" src="../assets/kid-about.png"
              alt="image description" />
            <div class="absolute inset-0 bg-black bg-opacity-70 transition duration-300 ease-in-out"></div>
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 class="text-center">
                <a class="text-white text-xl font-bold text-center" href="#">
                  <span class="absolute inset-0"></span>
                  Why it matters
                </a>
                <p class="text-white text-sm p-4">In Kenya, many vulnerable children face significant
                  barriers to education driven by poverty, fractured
                  family structures, and limited community support.
                  Without timely intervention, these children are at risk
                  of dropping out of school, falling into crime, or
                  perpetuating the cycle of poverty.<br>At Elimisha Watoto Foundation, we believe that
                  early support through education, mentorship, and
                  psychosocial care can change the course of a child's
                  life. By unlocking their potential, we’re not just
                  helping individual children we’re transforming
                  families, strengthening communities, and shaping the
                  future of our nation.<br><span class="font-bold">Educate a child. Transform a nation.</span></p>
                <!----<ul class="text-white text-left text-sm p-4 list-disc">
                  <li>To provide access to quality education for bright and/or talented leamers from economically
                    disadvantaged backgrounds </li>
                  <li>
                    To equip learners with critical life skills for resilience
                  </li>
                  <li>
                    To establish and maintain strategic partnerships to leverage the Foundation's resources for
                    sustainability
                  </li>
                  <li>
                    To strengthen the Foundation's institutional capacity for effective delivery of its mandate
                  </li>
                </ul>--->
              </h3>
            </div>
          </article>
        </section>
      </article>
    </section>
    <!----<section class="px-4 py-10 md:px-16 lg:px-24 bg-white text-gray-800">
    <div class="max-w-6xl mx-auto space-y-16">
      <!-- Page Title --
      <div class="text-center">
        <h1 class="text-3xl md:text-4xl font-bold text-primary mb-2">About Us</h1>
        <p class="text-lg text-gray-600 italic">Educate a child. Transform a nation.</p>
      </div>

      <!-- Who We Are --
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-primary">Who we are?</h2>
        <p class="text-black leading-relaxed">
          Elimisha Watoto Foundation is a registered non-governmental organization based in Kenya, dedicated to transforming the lives of vulnerable children.
          We exist to bridge the gap in access to education by providing holistic support including quality learning opportunities, psychosocial care, and mentorship.
          Our commitment is rooted in the belief that every child, regardless of their background or circumstances, has the right to learn, grow, and reach their full potential.
        </p>
      </div>

      <!-- What We Do --
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-primary">What we do?</h2>
        <p class="text-black leading-relaxed">
          At Elimisha Watoto Foundation, we create pathways for vulnerable children to access education and holistic development.
          Our programs are designed to remove barriers that hinder learning by:
        </p>
        <ul class="list-disc list-inside text-black space-y-2">
          <li>Providing educational support, including school fees, uniforms, and learning materials</li>
          <li>Offering psychosocial services such as counseling, trauma care, and emotional support</li>
          <li>Facilitating mentorship and life skills training to nurture confidence, resilience, and purpose</li>
          <li>Engaging families and communities to build supportive environments around each child</li>
        </ul>
        <p class="text-black leading-relaxed">
          Through these interventions, we empower children not only to stay in school but to succeed, thrive, and envision a brighter future.
        </p>
      </div>

      <!-- Why It Matters --
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-primary">Why it matters?</h2>
        <p class="text-black leading-relaxed">
          In Kenya, many vulnerable children face significant barriers to education driven by poverty, fractured family structures, and limited community support.
          Without timely intervention, these children are at risk of dropping out of school, falling into crime, or perpetuating the cycle of poverty.
        </p>
        <p class="text-black leading-relaxed">
          At Elimisha Watoto Foundation, we believe that
          early support through education, mentorship, and
          psychosocial care can change the course of a child's
          life. By unlocking their potential, we’re not just
          helping individual children we’re transforming
          families, strengthening communities, and shaping the
          future of our nation.
        </p>
        <p class="text-black font-bold leading-relaxed">
          Educate a child. Transform a nation.
        </p>
      </div>
    </div>
  </section>
  </div>
  <div>
    <!-- Get in Touch component -->
    <section class="bg-zinc-50 max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-4 mb-12">
      <article>
        <h2 class="text-5xl font-semibold text-center text-green-400">
          GET IN TOUCH
        </h2>
        <p class="text-center text-green-500 p-4">We'd love to hear from you</p>
        <section class="mt-6 grid grid-cols-1 gap-x-6 md:grid-cols-1 lg:grid-cols-3 gap-y-8">
          <article
            class="relative w-full h-80 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div
              class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out">
            </div>
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 class="text-center">
                <a class="text-white text-xl font-bold text-center" href="mailto:info@elimishawatoto.org">
                  <i class="material-icons text-white text-8xl">mail</i>
                </a>
                <p class="text-white text-sm p-4">info@elimishawatoto.org</p>
              </h3>
            </div>
          </article>
          <article
            class="relative w-full h-80 bg-teal-400 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <div
              class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out">
            </div>
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 class="text-center">
                <a class="text-white text-xl font-bold text-center" href="tel:+254 753 343 152">
                  <p>
                    <i class="material-icons text-white text-8xl">call</i>
                  </p>
                  <span class="absolute inset-0"></span>
                </a>
                <p class="text-white text-sm p-4">+254 753 343 152</p>
              </h3>
            </div>
          </article>

          <article
            class="relative w-full h-80 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
            <img class="absolute inset-0 object-cover w-full h-full" src="../assets/facebook-about.png"
              alt="image description" />
            <div class="absolute inset-0 bg-blue-800 bg-opacity-70 transition duration-300 ease-in-out"></div>
            <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
              <h3 class="text-center">
                <a class="text-white text-xl font-bold text-center" href="#">
                  <span class="absolute inset-0"></span>
                  Facebook
                </a>
                <p class="text-white text-sm p-4">Find us on Facebook</p>
              </h3>
            </div>
          </article>
        </section>
      </article>
    </section>
    <Card />
  </div>
</template>

<script>
import footer from "../components/Footer.vue";
export default {
  components: {
    footer,
  },
};
</script>

<style lang="scss" scoped></style>
../components/Footer.vue
