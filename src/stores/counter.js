import {
    defineStore
} from 'pinia'
const useCounter = defineStore("counter", {
    state: () => ({
        count: 66,
    }),
    getters: {},
    actions: {}
})
export default useCounter;