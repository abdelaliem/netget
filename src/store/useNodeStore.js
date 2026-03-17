import { create } from 'zustand'

const useNodeStore = create((set) => ({
  nodes: [],
  edges: [],
  setNodes: (nodes) => set({ nodes }),
  setEdges: (edges) => set({ edges }),
  updateNode: (updatedNode) =>
    set((state) => ({
      nodes: state.nodes.map((n) =>
        n.id === updatedNode.id ? { ...n, ...updatedNode } : n
      ),
    })),
}))

export default useNodeStore