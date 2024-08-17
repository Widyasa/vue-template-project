import {apiUrl} from "../../helpers/globalVariable";
import axios from "axios";
import type {Auth} from "../../types/Auth";
import {defineStore} from "pinia";
import router from "@/router";

export const useAuthStore = defineStore('useAuthStore', {
    state : () => ({
        isLoggedIn: false,
        loginOutput: {} as Auth,
    }),
    actions : {
        async login (loginData: any) {
            console.log(loginData)
            try {
                const {data}:Auth = await axios.post(apiUrl + 'login', loginData)
                console.log(data)
                this.loginOutput = data
                this.isLoggedIn = true
            } catch (e) {
                console.error(e)
            }
        },
        async register (registerData : any) {
            try {
                this.loginOutput = await axios.post(apiUrl + 'register', registerData)
                this.isLoggedIn = true
            } catch (e) {
                console.error(e)
            }
        },
        async logout() {
            this.loginOutput = {}
            this.isLoggedIn = false
            return router.push({name : 'login'})
        }
    },
    persist: true,
})