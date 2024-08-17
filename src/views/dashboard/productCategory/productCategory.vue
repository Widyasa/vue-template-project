<script setup lang="ts">

import TableComponent from "@/components/tableComponent.vue";
import {useProductCategoryStore} from "@/stores/ProductCategory";
import {onMounted, ref} from "vue";
import BaseButton from "@/components/base-button.vue";
import CreateProductCategory from "@/components/modals/productCategory/createProductCategory.vue";
import DetailProductCategory from "@/components/modals/productCategory/detailProductCategory.vue";
const thead = ['Name', 'Action']
const productCategory = useProductCategoryStore()
const id = ref()
const isLoading = ref(false)
const getAll = async () => {
  isLoading.value = true
  try {
    await productCategory.getProductCategory()
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
onMounted(() => {
  getAll()
})
const getId = (theId:any) => {
  id.value = theId
}
</script>

<template>
  <div class="d-flex justify-content-between">
    <h6 class="fs-3 fw-semibold">
      Product Category Page
    </h6>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createProductCategory">
      Add New
    </button>
  </div>
  <table-component :thead="thead">
    <tr v-for="(item, index) in productCategory.productCategoryList" :key="index">
      <td>{{item.name}}</td>
      <td class="d-flex gap-3">
        <base-button @click="getId(item.id)" custom-class="btn btn-primary">Detail</base-button>
        <base-button custom-class="btn btn-warning text-white ">Edit</base-button>
        <base-button custom-class="btn btn-danger">Delete</base-button>
      </td>
    </tr>
  </table-component>
  <CreateProductCategory />
  <DetailProductCategory :id="id" />
</template>

<style scoped>

</style>