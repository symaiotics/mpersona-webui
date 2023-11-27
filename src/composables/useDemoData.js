import { ref , computed} from "vue";
import axios from 'axios'
import configuredAxios from "@/utils/axios.js"

const username = ref('Guest User')
const userEmail = ref('guest@user.com')
const isFieldFocusRegistered = ref(false)
const clients = ref([])
const history = ref([])
const userAvatar = computed(
    () =>
        `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail.value.replace(
            /[^a-z0-9]+/gi,
            '-'
        )}`
)

export function useDemoData() {
    function setUser(payload) {
        if (payload.name) {
            username.value = payload.name
        }
        if (payload.email) {
            userEmail.value = payload.email
        }
    }

    function fetchSampleClients() {
        axios
            .get(`data-sources/clients.json?v=3`)
            .then((result) => {
                clients.value = result?.data?.data
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    function fetchSampleHistory() {
        axios
            .get(`data-sources/history.json`)
            .then((result) => {
                history.value = result?.data?.data
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return {
        username,
        userEmail,
        userAvatar,
        isFieldFocusRegistered,
        clients,
        history,
        setUser,
        fetchSampleClients,
        fetchSampleHistory
    }

}

