<script setup lang="ts">
const props = defineProps(['thead'])
</script>

<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col" v-for="item in props.thead" :key="item">{{item}}</th>
    </tr>
    </thead>
    <tbody>
      <slot></slot>
    </tbody>
  </table>
</template>

<style scoped>

</style>