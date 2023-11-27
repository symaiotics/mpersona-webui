<template>
  <LayoutGuest>
    <div class="min-h-screen flex flex-col">
      <!-- Hero Section -->

      <Cosmic :dark = "dark" :key = "dark">
        <section class="flex items-center justify-center text-center h-screen overflow-hidden relative">
    <div
      class="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-black opacity-75 animate-gradient-x"
      style="background-attachment: fixed;">
    </div>

    <div class="z-20">
      <!-- Conditionally display the image based on the theme -->
      <img v-if="dark" :src="Splash2" alt="mPersona Logo" class="mx-auto md:h-96 h-64 object-cover animate-scale" />
      <img v-else :src="Splash2Light" alt="mPersona Logo" class="mx-auto md:h-96 h-64 object-cover animate-scale" />

      <!-- Text colors are adjusted for light mode with black text and for dark mode with lighter text -->
      <h1 class="md:text-8xl text-5xl font-bold dark:text-gray-100 text-black">{{ L_('mPersona') }}</h1>
      <h2 class="md:text-2xl mt-2 italic dark:text-gray-300 text-gray-800">{{ L_('by Symaiotics') }}</h2>
      <p class="md:text-3xl mt-4 font-bold dark:text-gray-400 text-gray-900">
        {{ L_('Build your team of digital AI personas.') }} <br />{{ L_("Automate your enterprise.") }}
      </p>
      <!-- Button colors are kept the same as in the original code -->
      <button
        class="mt-8 bg-blue-600 dark:bg-gray-700 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 dark:hover:bg-gray-600 focus:outline-none focus:shadow-outline animate-pulse">
        {{ L_("Get Started") }}
      </button>
    </div>
  </section>
      </Cosmic>

      <!-- Overview Section -->
      <section class="container mx-auto p-8" data-aos="fade-up">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all ">
          <!-- Box 1 -->
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg " data-aos="fade-up">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">{{ L_('Build') }} </h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              {{ L_('Curate and sophisticated AI Personas.') }}
            </p>
          </div>
          <!-- Box 2 -->
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">{{ L_('Automate') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              {{ L_('Develop automated processes to take on complex tasks.') }}
            </p>
          </div>
          <!-- Box 3 -->
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">{{ L_('Engage') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              {{ L_('Interact with teams of Personas specially curated for you.') }}
            </p>
          </div>
          <!-- Box 4 -->
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">{{ L_('Deploy') }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              {{ L_('Rapidly deploy custom Persona-based app solutions.') }}
            </p>
          </div>
        </div>
      </section>


      <!-- Open Source  -->
      <section class="container mx-auto p-8" data-aos="fade-up" data-aos-delay="100">
        <div
          class="flex flex-wrap items-center justify-center md:justify-between bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 text-black dark:text-white">
          <div class="w-full md:w-1/2 p-6">

            <img v-if = "dark" :src="Splash2" alt="mPersona Logo" class="mx-auto md:h-96 h-64 object-cover animate-scale  " />
            <img v-else  :src="Splash2Light" alt="mPersona Logo" class="mx-auto md:h-96 h-64 object-cover animate-scale  " />


          </div>
          <div class="w-full md:w-1/2 text-center md:text-left p-6">
            <h2 class="text-3xl font-extrabold mb-4"> {{ L_('Open Source!') }}</h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {{ L_(`mPersona is now open source under the MIT License, inviting contributors and developers to
                            participate in its evolution.Access the code and contribute to the project on GitHub`) }}
            </p>
            <div class="space-x-2">
              <button
                class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 ease-linear">
                <BaseIcon :path="mdiGithub" size="16" />
                {{ L_('mPersona Web UI (Vue.js)') }}
              </button>
              <button
                class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow hover:shadow-md transition-all duration-300 ease-linear">
                <BaseIcon :path="mdiGithub" size="16" />
                {{ L_('mPersona Server (Node.js)') }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-black dark:text-white text-center"
        data-aos="fade-up" data-aos-delay="100">
        <h2 class="text-3xl font-bold">{{ L_('Start building Personas today!') }}</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {{ L_('Use the mPersona online platform to rapidly build and deploy. No credit card required.') }}
        </p>


        <button
          class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">
          {{ L_('Join mPersona') }}
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
              {{ L_('Claim Your Book') }}
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
import Splash2Light from '@/images/splash2-light.png'
import Book from '@/images/cropped-janak-alford-intelligent-digital-ecosystems-book-cover.png'

import Personas from '@/components/mPersona/Personas.vue';
import BaseIcon from '@/components/BaseIcon.vue'


import {
  mdiGithub,
} from '@mdi/js'


// import { useLexicon } from '@/composables/useLexicon.js';
// const { setLocale, t, lng} = useLexicon();

import { useDarkMode } from '@/composables/useDarkMode';
const { dark } = useDarkMode();
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
  /* text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); */
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
}
</style>