<script setup lang="ts">
import {useAuthStore} from "@/stores/Auth";
import {reactive, ref} from "vue";
import router from "@/router";
import BaseInput from "@/components/base-input.vue";
import BaseButton from "@/components/base-button.vue";
import SpinnerSm from "@/components/spinner-sm.vue";

const auth = useAuthStore()
const isLoading = ref(false)
const inputData = reactive({
  email: '',
  password: ''
})
const signIn = async () => {
  isLoading.value = true
  try {
    await auth.login(inputData)
    return router.push({name: 'dashboard'})
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="display-6 fw-semibold">Login</h1>
    <form @submit.prevent="signIn" class="d-flex flex-column gap-2 mt-4">
      <base-input input-placeholder="input email" input-type="text" input-name="email" input-title="Email" v-model="inputData.email" />
      <base-input input-placeholder="input password" input-type="text" input-name="password" input-title="Password" v-model="inputData.password" />
      <base-button custom-class="btn-primary align-items-center d-flex gap-2 w-100 justify-content-center mt-4 py-3" type="submit">
        submit
        <spinner-sm v-if="isLoading" />
      </base-button>
    </form>
  </div>
</template>

<style scoped>

</style>