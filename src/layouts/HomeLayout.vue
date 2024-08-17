<script setup lang="ts">

import Navbar from "@/components/navbar.vue";
</script>

<template>
  <div class="">
    <navbar />
    <div class="mt-5">
      <div class="container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>