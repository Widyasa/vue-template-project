<script setup lang="ts">
import {useAuthStore} from "@/stores/Auth";
import axios from "axios";

const auth = useAuthStore()
if (auth.isLoggedIn === true) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth.loginOutput.data.data.token}`
}
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
