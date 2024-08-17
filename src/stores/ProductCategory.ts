import {defineStore} from "pinia";
import type {ProductCategory} from "../../types/ProductCategory";
import axios from "axios";
import {apiUrl} from "../../helpers/globalVariable";

export const useProductCategoryStore = defineStore('useProductCategoryStore', {
    state : () => ({
        productCategoryList : [] as ProductCategory[],
        productCategory : {} as ProductCategory,
        status_code : 0,
    }),
    actions : {
        async getProductCategory () {
            const {data}:any = await axios.get(apiUrl + 'product/categories')
            console.log(data.data.categories)
            this.productCategoryList = data.data.categories
        },
        async getProductCategoryById(id:any) {
            const {data}:any = await axios.get(apiUrl + `product/categories/${id}`)
            console.log(data.data)
            // this.productCategoryList = data.data.categories
        },
        async createProductCategory(request:any) {
            console.log(request)
            try {
                const response = await axios.post(apiUrl + `product/categories`, request)
                console.log(response)
                if (response.status === 200) {
                    await this.getProductCategory()
                }
            } catch (e) {
                console.error(e)
            }
        },
    }
})