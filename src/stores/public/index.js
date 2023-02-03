import { defineStore } from "pinia";

/* Defining a store. */
export const publicStore = defineStore({
    state: () => ({
        languages: {
            'en': 'English',
            'es': 'Spanish',
            'ar': 'Arabic',
            'ru': 'Russian',
        },
        userId: '',
        language: 'en'
    }),
    getters: {
        languages: (state) => {
            return state.languages[state.language]
        }
    },
    actions: {
        updateLanguage(language) {
            this.$patch({
                language: language
            })
        }
    },
    persist: {
        key: 'publicStore',
        storage: window.sessionStorage
    }
});
