
<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Login" help="Please enter your login">
          <FormControl
            v-model="username"
            :icon="mdiAccount"
            name="login"
            autocomplete="username"
          />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl
            v-model="password"
            :icon="mdiAsterisk"
            type="password"
            name="password"
            autocomplete="current-password"
          />
        </FormField>

        <!-- <FormCheckRadio
          v-model="form.remember"
          name="remember"
          label="Remember"
          :input-value="true"
        /> -->

        <template #footer>
          <BaseButtons>
            <BaseButton @click = "doLogin" type="button" color="info" label="Login" />
            <BaseButton to="/" color="info" outline label="Back" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>



<script setup>

//Plugins
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'

//Components
import { mdiAccount, mdiAsterisk } from '@mdi/js'
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'

//Composables
import { notify } from "notiwind"
import { useAccounts } from '@/composables/useAccounts.js'
import { useTokens } from '@/composables/useTokens.js'
const { login } = useAccounts();
const { unsetTokens } = useTokens();
const router = useRouter()

let username = ref(null)
let password = ref(null)

onMounted(()=>{
  unsetTokens();
})

function doLogin() {
  login(username.value, password.value).then((response) => {
    notify({ group: "success", title: "Success", text: "Login successful"}, 4000) // 4s
    router.push({ name: 'dashboard' })
  }).catch((error) => {
    console.log("Error identified", error)
    notify({ group: "failure", title: "Error", text: "Login unsuccessful. Please try again." }, 4000) // 4s
  });
}

</script>
