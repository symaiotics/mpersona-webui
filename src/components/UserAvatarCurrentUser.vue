<script setup>
import UserAvatar from '@/components/UserAvatar.vue'

import { useTokens } from '@/composables/useTokens';
let { tokenDecoded } = useTokens();

import { useDemoData } from '@/composables/useDemoData';
let { username, userAvatar } = useDemoData();

</script>

<template>
  <UserAvatar :username="tokenDecoded?.username || username" :avatar="userAvatar">
    <slot />
  </UserAvatar>
</template>
