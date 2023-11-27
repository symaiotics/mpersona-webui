
<template>
  <RouterView />
</template>



<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'

import { useLexicon } from '@/composables/useLexicon.js'
const { getLexicon, getLng } = useLexicon();

import { useDarkMode } from '@/composables/useDarkMode.js'
const { dark, getDark, setDark } = useDarkMode();

import { useTokens } from '@/composables/useTokens.js'
const { recallTokens } = useTokens();

import { useWebsockets } from '@/composables/useWebsockets.js'
const { websocketConnection, wsUuid } = useWebsockets()

import { useDemoData } from '@/composables/useDemoData';
let { fetchSampleClients, fetchSampleHistory } = useDemoData();


onMounted(() => {

  getLexicon();

  recallTokens();
  AOS.init({
    once: true,
    disable: 'phone',
    duration: 600,
    easing: 'ease-out-sine',
  })

})

getDark(); //Remember the dark settings
getLng(); //Remember the language

fetchSampleClients();
fetchSampleHistory();

websocketConnection()

</script>