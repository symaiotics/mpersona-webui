import {
  mdiLogin,
  mdiThemeLightDark,
} from '@mdi/js'

export default [
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
