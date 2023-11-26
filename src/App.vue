
<template>
  <RouterView />
</template>



<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import AOS from 'aos'

import { useLexicon } from '@/composables/useLexicon.js'

import { useDarkMode } from '@/composables/useDarkMode.js'
import { useTokens } from '@/composables/useTokens.js'
import { useWebsockets } from '@/composables/useWebsockets.js'
const { getLexicon } = useLexicon();
const { dark, getDark, setDark } = useDarkMode();
const { recallTokens } = useTokens();
const { websocketConnection, wsUuid } = useWebsockets()

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

websocketConnection()
getDark(); //Default to false

</script>