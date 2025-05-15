// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    stateDrawer: true,
  }),
  actions: {
    toggleDrawer() {
      this.stateDrawer = !this.stateDrawer
    }
  },
  persist: true,
})
