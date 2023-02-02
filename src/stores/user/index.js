import { defineStore } from "pinia";

/* User store. */

export const userStore = defineStore('main', {
    state: () => ({
        token: '',
        language: 'en',
        userInfo: null,
    }),
    actions: {
        userLogout() {
            return new Promise((resolve) => {
                // if seccess 
                resolve(/*the response*/)
            });
        },
        updateUserToken(token) {
            this.$patch({
                token: token
            })
            if (token) {
                this.getUserInfo();
            }
        },
        updateUserInfo(userInfo) {
            this.userInfo = userInfo
        },
        getUserInfo(context) {
            console.log(context)
        }
    },
    persist: {
        key: 'userStore',
        storage: window.sessionStorage
    }
})