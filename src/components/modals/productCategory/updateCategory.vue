<script setup lang="ts">
import {reactive, ref, watch} from "vue";
import {useProductCategoryStore} from "@/stores/ProductCategory";
import BaseInput from "@/components/base-input.vue";
import SpinnerSm from '@/components/spinner-sm.vue'
import BaseButton from '@/components/base-button.vue'

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
const inputData = reactive({
  name : ''
})
const updateData = async () => {
  isLoading.value = true;
  try {
    await productCategory.updateProductCategory(inputData,props.id)
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="modal fade" id="detailProductCategory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Update Product Category</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateData">
            <base-input input-title="Category Name" input-name="name" input-type="text" input-placeholder="input name..." v-model="inputData.name" />
            <base-button type="submit" data-bs-dismiss="modal" custom-class="btn-primary d-flex justify-content-center align-items-center gap-2 mt-4">
              Submit
              <spinner-sm v-if="isLoading"/>
            </base-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>