<template>
  <section class="relative border-t border-transparent dark:border-gray-800">
    <!-- Background gradient -->
    <div class="absolute inset-0 h-128 dark:opacity-25 pointer-events-none" aria-hidden="true"></div>
    <!-- End background gradient -->
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">

          <h2 class="text-3xl font-bold">{{ L_('Pick your Persona') }}</h2>

          <h2 class="h2 font-red-hat-display mb-4 text-black dark:text-white"></h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            {{ L_('Select from our ever-growing library of digital personas to guide your AI interactions.')}}</p>
        </div>

        <!-- Section content -->
        <div>
          <div class="grid lg:grid-cols-3 gap-12 lg:gap-6">

            <!-- Category buttons -->
            <div class="lg:col-span-1 lg:pr-16 flex flex-wrap justify-center lg:flex-col lg:justify-start -m-1 lg:mx-0">
              <template v-for="(category, index) in usedCategories" :key="'categoryFilter'+ index">
                <button @click="selectCategory(category)"
                  class="lg:w-full font-medium px-3 py-2 bg-white hover:bg-gray-50 shadow dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-150 ease-in-out rounded flex items-center justify-center lg:justify-start m-1 lg:mx-0"
                  :class="{ 'bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600 dark:bg-opacity-25 dark:hover:bg-opacity-25': selectedCategory?.code === category.code }">
                  <!-- Icon SVG omitted for brevity -->
                  <span
                    :class="selectedCategory?.code == category.code ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-300'">{{
                      category.label.en }}</span>
                </button>
              </template>
            </div>

            <!-- Personas -->
            <div class="lg:col-span-2 max-w-sm mx-auto md:max-w-3xl lg:max-w-none">
              <div class="grid md:grid-cols-2 gap-6">
                <div v-for="(persona, index) in filteredPersonas" :key="'persona' + index"
                  class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div @click="selectAndInteract(persona)" class="shrink-0">
                    <img class="w-full" :src="persona.url || defaultImage" width="352" height="264"
                      alt="Persona thumbnail" />
                  </div>
                  <div @click.stop="selectAndInteract(persona)"
                    class="flex-grow px-6 py-3 bg-white dark:bg-gray-900 flex flex-col items-center">
                    <div class="text-center">
                      <div class="font-bold text-black dark:text-white">{{ persona.name }}</div>
                      <div class="text-gray-600 dark:text-gray-300">{{ persona.description.en }}</div>
                    </div>
                    <button
                      class="mt-3 px-3 py-1 text-xs font-medium bg-gray-900 dark:bg-teal-600 text-white rounded-full hover:opacity-75 transition duration-150 ease-in-out">
                      {{L_('Select')}}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

//Components
import defaultImage from "@/images/persona1.png"
import { usePersonas } from '@/composables/usePersonas.js'
import { useCategories } from '@/composables/useCategories.js'
import { useLexicon } from '@/composables/useLexicon';

//Composables
const { personas, selectedPersona, usedCategories, skills, getPersonas, getSkills, getUsedCategories } = usePersonas()
const { categories, selectedCategory, getCategories, createAdminCategories } = useCategories()
const { L_, lng } = useLexicon();

//Variables and computed
let filteredPersonas = computed(() => {
  let filteredPersonas = personas.value;
  if (selectedCategory.value) {
    filteredPersonas = personas.value.filter(persona => {
      return persona.categories.some(category => {
        return category.code === selectedCategory.value.code;
      });
    });
  }
  return filteredPersonas;
})

const router = useRouter()
const route = useRoute()

//Functions
function selectCategory(category) {
  selectedCategory.value = category;
}

function selectAndInteract(persona) {
  selectedPersona.value = persona;
  console.log("Selected Persona", persona)
  router.push({ name: 'chat', params: { personaId: persona.uuid } })

}


</script>