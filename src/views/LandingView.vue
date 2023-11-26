<template>
  <LayoutGuest>
    <div class="min-h-screen flex flex-col">
      <!-- Hero Section -->
      <Cosmic>
        <section class="flex items-center justify-center text-center h-screen overflow-hidden relative">
          <div
            class="absolute inset-0 bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-black from-blue-800 via-blue-900 to-black opacity-75 animate-gradient-x"
            style="background-attachment: fixed;">
          </div>

          <!-- <div id="particles-js" class="absolute inset-0"></div> -->
          <div class="z-20">
            <img :src="Splash2" alt="mPersona Logo" class="mx-auto h-96 object-cover animate-scale  " />
            <h1 class="text-8xl font-bold dark:text-gray-100 text-white  ">{{ L_('mPersona') }}</h1>
            <h2 class="text-2xl mt-2 italic dark:text-gray-300 text-white">{{ L_('by Symaiotics') }}</h2>
            <p class="text-3xl mt-4 font-bold dark:text-gray-400 text-gray-100">
              {{ L_('Build your team of digital AI personas.') }} <br />{{ L_("Automate your enterprise.") }}
            </p>
            <button
              class="mt-8 bg-blue-600 dark:bg-gray-700 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 dark:hover:bg-gray-600 focus:outline-none focus:shadow-outline animate-pulse">
              {{L_("Get Started")}}
            </button>
          </div>
        </section>
      </Cosmic>


      <!-- Overview Section -->
      <section class="container mx-auto p-8" data-aos="fade-up">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <!-- Box 1 -->
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg " data-aos="fade-up">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Innovative AI</h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              Cutting-edge artificial intelligence to power your digital team.
            </p>
          </div>
          <!-- Box 2 -->
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Innovative AI</h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              Cutting-edge artificial intelligence to power your digital team.
            </p>
          </div>
          <!-- Box 3 -->
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Innovative AI</h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              Cutting-edge artificial intelligence to power your digital team.
            </p>
          </div>
          <!-- Box 4 -->
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">Innovative AI</h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              Cutting-edge artificial intelligence to power your digital team.
            </p>
          </div>
        </div>
      </section>




      <!-- Call to Action Section -->
      <section class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-black dark:text-white text-center"
        data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-3xl font-bold">{{L_('Ready to start interacting with Personas?')}}</h2>
        <button
          class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">
          {{L_('Join mPersona')}}
        </button>

        <Personas />
      </section>

      <!-- Book -->
      <section class="container mx-auto p-8" data-aos="fade-up" data-aos-delay="100">
        <div
          class="flex flex-wrap items-center justify-center md:justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-black dark:text-white">
          <div class="w-full md:w-1/2 p-6">
            <img :src="Book" alt="Intelligent Digital Ecosystems Book"
              class="max-w-xs md:max-w-sm mx-auto h-auto object-cover rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl" />
          </div>
          <div class="w-full md:w-1/2 text-center md:text-left p-6">
            <h2 class="text-3xl font-extrabold mb-4">Intelligent Digital Ecosystems</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {{ L_('mPersona is inspired by Intelligent Digital Ecosystems by Janak Alford') }}

            </p>
            <a href="https://www.amazon.com/Intelligent-Digital-Ecosystems-Rethinking-Technology/dp/0228873010/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1685442142&sr=8-2"
              class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 ease-linear">
              {{L_('Claim Your Book')}}
            </a>
          </div>
        </div>
      </section>

    </div>

    <FooterBar />
  </LayoutGuest>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import LayoutGuest from '@/layouts/LayoutGuest.vue';
import Cosmic from '@/components/mPersona/Cosmic.vue';
import Splash1 from '@/images/splash1.png'
import Splash2 from '@/images/splash2.png'
import Book from '@/images/cropped-janak-alford-intelligent-digital-ecosystems-book-cover.png'

import Personas from '@/components/mPersona/Personas.vue';

// import { useLexicon } from '@/composables/useLexicon.js';
// const { setLocale, t, lng} = useLexicon();

import { useLexicon } from '@/composables/useLexicon';
const { L_ } = useLexicon();

//composables
import { usePersonas } from '@/composables/usePersonas.js'
import { useCategories } from '@/composables/useCategories.js'
import FooterBar from '@/components/FooterBar.vue';
const { personas, usedCategories, skills, getPersonas, getSkills, getUsedCategories } = usePersonas()
const { categories, getCategories, createAdminCategories } = useCategories()

onMounted(() => {
  //Personas
  getPersonas();
  getSkills();

  //Categories
  getUsedCategories();
  createAdminCategories();
})

</script>

<style scoped>
/* Adjust the text shadow to be more subtle */
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.custom-text-shadow {
  text-shadow: 2px 2px 4px rgb(5, 14, 37);
  /* Example shadow color and size */
}

/* Ensure that the keyframes and animations are defined correctly */

/* Gradient animation */
@keyframes gradientX {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradientX 15s ease infinite;
}

/* Scale animation */
@keyframes scale {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

.animate-scale {
  animation: scale 10s infinite ease-in-out;
}

/* Pulse animation */
@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.75;
    transform: scale(1.05);
  }
}

.animate-pulse {
  animation: pulse 2s infinite ease-in-out;
}</style>