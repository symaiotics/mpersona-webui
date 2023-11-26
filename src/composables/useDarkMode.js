import { ref } from 'vue';

const dark = ref(true);

export function useDarkMode() {
    function setDark(newValue) {
        if (typeof sessionStorage !== 'undefined') {
            sessionStorage.setItem('dark-mode', newValue);
        }
        dark.value = newValue === true || newValue === 'true';
        document.body.classList.toggle('dark-scrollbars', dark.value);
        document.documentElement.classList.toggle('dark', dark.value);
        document.documentElement.classList.toggle('dark-scrollbars-compat', dark.value);
    }

    function getDark() {
        let checkDark;
        if (typeof sessionStorage !== 'undefined') {
            checkDark = sessionStorage.getItem('dark-mode');
        }
        dark.value = checkDark === 'true';
        setDark(dark.value);
    }

    
    function toggleDark() {
        dark.value = !dark.value;
        setDark(dark.value);
    }

    return {
        dark,
        getDark,
        setDark,
        toggleDark,
    };
}