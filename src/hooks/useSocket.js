import { useEffect } from 'react'
import socket from '../services/socket'
import useSocketStore from '../store/useSocketStore'
import useNodeStore from '../store/useNodeStore'
import useAlertStore from '../store/useAlertStore'
import useTerminalStore from '../store/useTerminalStore'
import { SOCKET_EVENTS } from '../constants/socketEvents'

export function useSocket() {
  const setConnected = useSocketStore((state) => state.setConnected)
  const setNodes = useNodeStore((state) => state.setNodes)
  const addAlert = useAlertStore((state) => state.addAlert)
  const addOutput = useTerminalStore((state) => state.addOutput)

  useEffect(() => {
    socket.connect()

    socket.on('connect', () => setConnected(true))
    socket.on('disconnect', () => setConnected(false))
    socket.on(SOCKET_EVENTS.NODE_UPDATE, (data) => setNodes(data))
    socket.on(SOCKET_EVENTS.ALERT_TRIGGERED, (alert) => addAlert(alert))
    socket.on(SOCKET_EVENTS.TERMINAL_OUTPUT, (line) => addOutput(line))

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off(SOCKET_EVENTS.NODE_UPDATE)
      socket.off(SOCKET_EVENTS.ALERT_TRIGGERED)
      socket.off(SOCKET_EVENTS.TERMINAL_OUTPUT)
      socket.disconnect()
    }
  }, [setConnected, setNodes, addAlert, addOutput])
}