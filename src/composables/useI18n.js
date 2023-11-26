//This code is provided in case you wish to use I18N instead of a database-sourced lexicon
import { ref } from 'vue';
// import { createI18n } from 'vue-i18n';
// import lexicon from '@/assets/lexicon.json'; 
//It requires a lexicon.json in the following format with en and fr in the same object.
//Object key must be lowerspace without spaces due to vue-i18n requirements in v9.x
/*
{
    "mpersona": {
        "en": "mPersona",
        "fr": "mPersonne"
    }
}
*/

const messages = Object.keys(lexicon).reduce((acc, key) => {
    const translation = lexicon[key];
    Object.keys(translation).forEach((locale) => {
        if (!acc[locale]) {
            acc[locale] = {};
        }
        acc[locale][key] = translation[locale];
    });
    return acc;
}, {});

// Initialize the i18n instance with the messages
const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages,
    warnHtmlMessage: false, // Disable warnings for HTML messages
    fallbackWarn: false,    // Disable warnings when falling back to the fallback locale or root
    missingWarn: false,     // Disable warnings for missing keys
});
// Create a ref to hold the current locale state
const lng = ref(i18n.global.locale);

// Create a ref to hold missing translation keys
const missing = ref([]);

function setLocale(locale) {
    i18n.global.locale = locale;
    lng.value = locale;
    if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('locale', locale);
    }
}

function getLocale() {
    if (typeof sessionStorage !== 'undefined') {
        const storedLocale = sessionStorage.getItem('locale');
        if (storedLocale) {
            i18n.global.locale = storedLocale;
            lng.value = storedLocale;
        }
    }
    return lng.value;
}

// Initialize locale from sessionStorage
getLocale();
function t(key) {
    const translation = i18n.global.t(key);
    if (translation === key || translation === null || translation === undefined) {
        // Check if the translation is missing
        if (!missing.value.includes(key)) {
            missing.value.push(key); // Add the missing key to the missing array
        }
        return `[${key}]`; // Return the key surrounded by square brackets
    }
    return translation;
}

function toggleLocale() {
    const newLocale = lng.value === 'en' ? 'fr' : 'en';
    setLocale(newLocale);
}

export function useLexicon() {
    return {
        lng,
        setLocale,
        getLocale,
        t,
        toggleLocale,
        missing,
    };
}

export default i18n;