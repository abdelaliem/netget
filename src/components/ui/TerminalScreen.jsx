import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from '@xterm/addon-fit';
import 'xterm/css/xterm.css';

const TerminalScreen = ({
  title = "Terminal",
  height = "500px",
  className = "",
  socket
}) => {
  const terminalRef = useRef(null);
  const term = useRef(null);
  const fitAddon = useRef(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    term.current = new XTerm({
      cursorBlink: true,
      theme: {
        background: '#111827',
        foreground: '#4ade80',
        cursor: '#4ade80',
        scrollbar: '#1f2937',
      },
      fontFamily: 'monospace',
      scrollback: 1000,
    });

    fitAddon.current = new FitAddon();
    term.current.loadAddon(fitAddon.current);

    const raf = requestAnimationFrame(() => {
      if (!terminalRef.current) return;
      term.current.open(terminalRef.current);

      requestAnimationFrame(() => {
        fitAddon.current?.fit();

        term.current.writeln('agent@netget:~$ configuring remote terminal interface...');
        term.current.writeln('Done.\r\n');

        if (socket) {
          term.current.writeln('waiting for connection payload...');
          term.current.onData((data) => socket.emit('terminal:write', data));

          const dataListener = (data) => term.current.write(data);
          socket.on('terminal:data', dataListener);
        } else {
          let inputBuffer = '';

          term.current.onData((data) => {
            if (data === '\r') {
              term.current.write('\r\n');
              inputBuffer = '';
              term.current.write('agent@netget:~$ ');
            } else if (data === '\x7F') {
              if (inputBuffer.length > 0) {
                inputBuffer = inputBuffer.slice(0, -1);
                term.current.write('\b \b');
              }
            } else {
              inputBuffer += data;
              term.current.write(data);
            }
          });

          term.current.write('agent@netget:~$ ');
        }
      });
    });

    const handleResize = () => {
      requestAnimationFrame(() => fitAddon.current?.fit());
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      if (socket) socket.off('terminal:data');
      term.current?.dispose();
    };
  }, [socket]);

  return (
    <div
      className={`bg-gray-900 rounded-2xl shadow-sm border border-gray-800 text-green-400 font-mono mt-6 flex flex-col overflow-hidden ${className}`}
      style={{ height }}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-800 flex-shrink-0">
          <h1 className="text-xl font-bold text-white">{title}</h1>
        </div>
      )}

      {/* xterm needs a block container with explicit dimensions, not flex */}
      <div
        style={{
          flex: 1,
          minHeight: 0,        /* ✅ critical: prevents flex child from overflowing */
          padding: '12px',
          boxSizing: 'border-box',
          overflow: 'hidden',  /* ✅ clips xterm's own scrollbar to this box */
        }}
      >
        <div
          ref={terminalRef}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default TerminalScreen;