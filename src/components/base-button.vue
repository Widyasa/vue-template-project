<script setup lang="ts">
const props = defineProps({
  'customClass': String,
})
</script>

<template>
  <button class="btn" :class="props.customClass">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>