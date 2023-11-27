import { ref } from "vue";
import configuredAxios from "@/utils/axios.js"

import { useTokens } from '@/composables/useTokens.js'
const { tokenDecoded } = useTokens();

import { useLexicon } from '@/composables/useLexicon.js'
const { lng } = useLexicon();

import {
    mdiMenu,
    mdiAccountCircle,
    mdiAlertCircle,
    mdiClockOutline,
    mdiCloud,
    mdiCrop,
    mdiAccount,
    mdiCogOutline,
    mdiEmail,
    mdiGithub,
    mdiLock,
    mdiLogout,
    mdiLogin,
    mdiMonitor,
    mdiPalette,
    mdiResponsive,
    mdiSquareEditOutline,
    mdiTable,
    mdiTelevisionGuide,
    mdiThemeLightDark,
    mdiViewList,
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

        return
        [
            {
                icon: mdiMenu,
                label: 'Sample menu',
                menu: [
                    {
                        icon: mdiClockOutline,
                        label: 'Item One'
                    },
                    {
                        icon: mdiCloud,
                        label: 'Item Two'
                    },
                    {
                        isDivider: true
                    },
                    {
                        icon: mdiCrop,
                        label: 'Item Last'
                    }
                ]
            },
            {
                isCurrentUser: true,
                menu: [
                    {
                        icon: mdiAccount,
                        label: 'My Profile',
                        to: '/profile'
                    },
                    {
                        icon: mdiCogOutline,
                        label: 'Settings'
                    },
                    {
                        icon: mdiEmail,
                        label: 'Messages'
                    },
                    {
                        isDivider: true
                    },
                    {
                        icon: mdiLogout,
                        label: 'Log Out',
                        isLogout: true
                    }
                ]
            },
            {
                icon: mdiThemeLightDark,
                label: 'Light/Dark',
                isDesktopNoLabel: true,
                isToggleLightDark: true
            },
            {
                icon: mdiGithub,
                label: 'GitHub',
                isDesktopNoLabel: true,
                href: 'https://github.com/symaiotics/mpersona-vue',
                target: '_blank'
            },

            {
                icon: mdiLogout,
                label: 'Log out',
                isDesktopNoLabel: true,
                isLogout: true
            }
        ]

    }

    async function getDashboardMenu() {
        return

        [
            {
                to: '/dashboard',
                icon: mdiMonitor,
                label: 'Dashboard'
            },
            {
                to: '/tables',
                label: 'Tables',
                icon: mdiTable
            },
            {
                to: '/forms',
                label: 'Forms',
                icon: mdiSquareEditOutline
            },
            {
                to: '/ui',
                label: 'UI',
                icon: mdiTelevisionGuide
            },
            {
                to: '/responsive',
                label: 'Responsive',
                icon: mdiResponsive
            },
            {
                to: '/',
                label: 'Styles',
                icon: mdiPalette
            },
            {
                to: '/profile',
                label: 'Profile',
                icon: mdiAccountCircle
            },
            {
                to: '/login',
                label: 'Login',
                icon: mdiLock
            },
            {
                to: '/error',
                label: 'Error',
                icon: mdiAlertCircle
            },
            {
                label: 'Dropdown',
                icon: mdiViewList,
                menu: [
                    {
                        label: 'Item One'
                    },
                    {
                        label: 'Item Two'
                    }
                ]
            },
            {
                href: 'https://github.com/symaiotics/mpersona-vue',
                label: 'GitHub',
                icon: mdiGithub,
                target: '_blank'
            },

        ]


    }


    return {
        getVisitorMenu,
        getUserMenu,
        getDashboardMenu,

    };
}

