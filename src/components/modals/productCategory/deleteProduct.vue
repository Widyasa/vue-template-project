<script setup lang="ts">
import { useProductCategoryStore } from '@/stores/ProductCategory'

const productCategory = useProductCategoryStore()
const emit = defineEmits(['closeModal', 'showAlert'])
const props = defineProps({
  'id' : Number
})
const deleteData = async () => {
  await productCategory.deleteProductCategory(props.id);
  emit('closeModal');
  emit('showAlert')
}
</script>

<template>

</template>

<style scoped>

</style>