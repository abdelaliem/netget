import { create } from 'zustand'

const useAlertStore = create((set) => ({
  alerts: [],
  addAlert: (alert) =>
    set((state) => ({ alerts: [...state.alerts, alert] })),
  clearAlerts: () => set({ alerts: [] }),
  removeAlert: (id) =>
    set((state) => ({
      alerts: state.alerts.filter((a) => a.id !== id),
    })),
}))

export default useAlertStore