<script setup>
import { ref } from 'vue'

import { useTokens } from '@/composables/useTokens';
let { tokenDecoded } = useTokens();

import { useDemoData } from '@/composables/useDemoData';
let { username, userAvatar } = useDemoData();

import { mdiCheckDecagram } from '@mdi/js'
import BaseLevel from '@/components/BaseLevel.vue'
import UserAvatarCurrentUser from '@/components/UserAvatarCurrentUser.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import PillTag from '@/components/PillTag.vue'


const userSwitchVal = ref(false)
</script>

<template>
  <CardBox>
    <BaseLevel type="justify-around lg:justify-center">
      <UserAvatarCurrentUser class="lg:mx-12" />
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
          <FormCheckRadio v-model="userSwitchVal" name="notifications-switch" type="switch" label="Notifications"
            :input-value="true" />
        </div>
        <h1 class="text-2xl">
          Howdy, <b>{{ tokenDecoded?.username || username }}</b>!
        </h1>
        <p>Last login <b>12 mins ago</b> from <b>127.0.0.1</b></p>
        <div class="flex justify-center md:block">
          <PillTag label="Verified" color="info" :icon="mdiCheckDecagram" />
        </div>
      </div>
    </BaseLevel>
  </CardBox>
</template>
