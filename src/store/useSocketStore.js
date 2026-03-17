import { create } from 'zustand'

const useSocketStore = create((set) => ({
  isConnected: false,
  setConnected: (status) => set({ isConnected: status }),
}))

export default useSocketStore