<template>
  <div class="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
    <!-- {{ getVisitorMenu() }} -->
    <NavBar :menu="getVisitorMenu()" :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      @menu-click="menuClick">
    </NavBar>

    <slot />
  </div>
</template>
<script setup>
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import menuNavBarSimple from '@/menuNavBarSimple.js'
import BaseIcon from '@/components/BaseIcon.vue'
import FormControl from '@/components/FormControl.vue'
import NavBar from '@/components/NavBar.vue'
import NavBarItemPlain from '@/components/NavBarItemPlain.vue'
import FooterBar from '@/components/FooterBar.vue'

import { useMenus } from '@/composables/useMenus.js'
const { getVisitorMenu } = useMenus();

import { useLexicon } from '@/composables/useLexicon.js'
const { toggleLng } = useLexicon();

import { useDarkMode } from '@/composables/useDarkMode.js'
const { dark, getDark, setDark, toggleDark } = useDarkMode();

const layoutAsidePadding = 'xl:pl-60'
const router = useRouter()
const isAsideMobileExpanded = ref(false)
const isAsideLgActive = ref(false)

router.beforeEach(() => {
  isAsideMobileExpanded.value = false
  isAsideLgActive.value = false
})

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    toggleDark();
  }

  if (item.toggleLng) {
    toggleLng();
  }

  if (item.isLogin) {
    router.push({ name: "login" })

  }

  if (item.routeTo) {
    router.push({ name: item.routeTo })

  }

}

</script>