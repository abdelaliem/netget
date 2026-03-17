import { create } from 'zustand'

const useTerminalStore = create((set) => ({
  output: [],
  addOutput: (line) =>
    set((state) => ({ output: [...state.output, line] })),
  clearOutput: () => set({ output: [] }),
}))

export default useTerminalStore