<script setup lang="ts">
import {useAuthStore} from "@/stores/Auth";

const auth = useAuthStore()
</script>

<template>
  <p>{{auth.loginOutput.data.data.token}}</p>
  <p>ini dashboard</p>
</template>

<style scoped>

</style>