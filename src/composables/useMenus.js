import { ref } from "vue";
import configuredAxios from "@/utils/axios.js"

import { useTokens } from '@/composables/useTokens.js'
const { tokenDecoded } = useTokens();

import { useLexicon } from '@/composables/useLexicon.js'
const { lng } = useLexicon();

import {
    mdiMenu,
    mdiClockOutline,
    mdiCloud,
    mdiCrop,
    mdiAccount,
    mdiCogOutline,
    mdiEmail,
    mdiLogout,
    mdiLogin,
    mdiThemeLightDark,
    mdiGithub,
    mdiReact
  } from '@mdi/js'
  

export function useMenus() {
    async function getVisitorMenu() {

        return [
            {
                label: 'EN/FR',
                isDesktopNoLabel: false,
                toggleLng: true,
            },
            {
                icon: mdiThemeLightDark,
                label: 'Light/Dark',
                isDesktopNoLabel: true,
                isToggleLightDark: true
            },
            {
                icon: mdiLogin,
                label: 'Log in',
                isDesktopNoLabel: true,
                isLogout: true
            }
        ]


    }

    async function getUserMenu() {

    }

    async function getDashboardMenu() {

    }


    return {
        getVisitorMenu,
        getUserMenu,
        getDashboardMenu,

    };
}

