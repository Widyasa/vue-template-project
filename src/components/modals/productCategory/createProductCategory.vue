<script setup lang="ts">
import {reactive, ref} from "vue";
import {useProductCategoryStore} from "@/stores/ProductCategory";
import BaseInput from "@/components/base-input.vue";
import BaseButton from "@/components/base-button.vue";
import SpinnerSm from "@/components/spinner-sm.vue";

const isLoading = ref(false)
const productCategory = useProductCategoryStore()
const inputData = reactive({
  name : ''
})
const createData = async () => {
  isLoading.value = true
  try {
    await productCategory.createProductCategory(inputData)
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div class="modal fade" id="createProductCategory" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create Product Category</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createData">
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