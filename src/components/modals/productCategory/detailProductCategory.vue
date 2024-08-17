<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import {useProductCategoryStore} from "@/stores/ProductCategory";
import BaseInput from "@/components/base-input.vue";

const props = defineProps(['id'])
const isLoading = ref(false)
const productCategory = useProductCategoryStore()
watch(() => props.id, async (newValue, oldValue) => {
  if (newValue) {
    isLoading.value = true;
    await productCategory.getProductCategoryById(props.id);
    isLoading.value = false;
  }
})
</script>

<template>
  <div class="modal fade" id="detailProductCategory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Detail Product Category</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <base-input read-only input-title="Category Name" input-name="name" input-type="text" input-placeholder="input name..." v-model="productCategory.productCategory.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>