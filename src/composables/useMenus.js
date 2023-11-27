import { ref } from "vue";
import configuredAxios from "@/utils/axios.js"


import Splash2 from '@/images/splash2.png'
import Splash2Light from '@/images/splash2-light.png'

import { useDarkMode } from '@/composables/useDarkMode.js'
const { dark, getDark, setDark } = useDarkMode();

import { useTokens } from '@/composables/useTokens.js'
const { tokenDecoded } = useTokens();

import { useLexicon } from '@/composables/useLexicon.js'
const { lng, L_ } = useLexicon();

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
    function getVisitorMenu() {

        return [
            {
                label: L_('Home'),
                isDesktopNoLabel: true,
                img: dark.value ? Splash2 : Splash2Light,
                routeTo: 'home',
            },
            {
                label: lng.value == 'en' ? "FR" : 'EN',
                isDesktopNoLabel: false,
                toggleLng: true,
            },
            {
                icon: mdiThemeLightDark,
                label: L_('Light/Dark'),
                isDesktopNoLabel: true,
                isToggleLightDark: true
            },
            {
                icon: mdiLogin,
                label: L_('Log in'),
                isDesktopNoLabel: true,
                isLogin: true
            }
        ]


    }

    function getUserMenu() {

        return [
            {
                icon: mdiMenu,
                label: tokenDecoded?.value?.username || 'Guest',
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

    function getAsideMenu() {
        return [
            {
                to: '/dashboard',
                icon: mdiMonitor,
                label: L_('Dashboard')
            },

            {
                to: '/dashboard',
                icon: mdiMonitor,
                label: L_('Personas')
            },

           
            {
                to: '/dashboard',
                icon: mdiMonitor,
                label: L_('Rosters')
            },

            {
                to: '/dashboard',
                icon: mdiMonitor,
                label: L_('Work Streams')
            },

            {
                to: '/dashboard',
                icon: mdiMonitor,
                label: L_('Knowledge Profiles')
            },

            {
                to: '/dashboard',
                icon: mdiMonitor,
                label: L_('Actions')
            },

            {
                to: '/dashboard',
                icon: mdiMonitor,
                label: L_('Wrapps')
            },


            // {
            //     to: '/tables',
            //     label: 'Tables',
            //     icon: mdiTable
            // },
            // {
            //     to: '/forms',
            //     label: 'Forms',
            //     icon: mdiSquareEditOutline
            // },
            // {
            //     to: '/ui',
            //     label: 'UI',
            //     icon: mdiTelevisionGuide
            // },
            // {
            //     to: '/responsive',
            //     label: 'Responsive',
            //     icon: mdiResponsive
            // },
            // {
            //     to: '/',
            //     label: 'Styles',
            //     icon: mdiPalette
            // },
            {
                to: '/profile',
                label: L_('Profile'),
                icon: mdiAccountCircle
            },
            // {
            //     to: '/login',
            //     label: 'Login',
            //     icon: mdiLock
            // },
            // {
            //     to: '/error',
            //     label: 'Error',
            //     icon: mdiAlertCircle
            // },
            // {
            //     label: 'Dropdown',
            //     icon: mdiViewList,
            //     menu: [
            //         {
            //             label: 'Item One'
            //         },
            //         {
            //             label: 'Item Two'
            //         }
            //     ]
            // },
            // {
            //     href: 'https://github.com/symaiotics/mpersona-vue',
            //     label: 'GitHub',
            //     icon: mdiGithub,
            //     target: '_blank'
            // },

        ]


    }


    return {
        getVisitorMenu,
        getUserMenu,
        getAsideMenu,

    };
}

