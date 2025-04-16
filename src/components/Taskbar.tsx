import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useSystemStore } from '../store/systemStore';

export const Taskbar: React.FC = () => {
  const {
    isStartMenuOpen,
    toggleStartMenu,
    activeWindows,
    focusedWindowId,
    minimizedWindows,
    setFocusedWindow,
    restoreWindow,
    systemTime,
    volume
  } = useSystemStore();

  const handleWindowClick = (windowId: string) => {
    if (minimizedWindows.includes(windowId)) {
      restoreWindow(windowId);
    }
    setFocusedWindow(windowId);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40px',
        background: '#c0c0c0',
        borderTop: '2px solid #fff',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 4px',
        zIndex: 10000,
        userSelect: 'none'
      }}
    >
      {/* Start Button */}
      <motion.button
        whileHover={{ backgroundColor: '#dfdfdf' }}
        whileTap={{ backgroundColor: '#808080' }}
        style={{
          padding: '4px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: isStartMenuOpen ? '#808080' : '#c0c0c0',
          border: '2px solid #fff',
          borderRight: '2px solid #808080',
          borderBottom: '2px solid #808080',
          cursor: 'pointer',
          height: '34px'
        }}
        onClick={toggleStartMenu}
      >
        <img
          src="/assets/icons/start.png"
          alt="Start"
          style={{ width: '20px', height: '20px' }}
        />
        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Start</span>
      </motion.button>

      {/* Running Programs */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          gap: '4px',
          padding: '0 4px',
          overflow: 'hidden'
        }}
      >
        {activeWindows.map(window => (
          <motion.button
            key={window.id}
            whileHover={{ backgroundColor: '#dfdfdf' }}
            whileTap={{ backgroundColor: '#808080' }}
            onClick={() => handleWindowClick(window.id)}
            style={{
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: focusedWindowId === window.id ? '#808080' : '#c0c0c0',
              border: '2px solid #fff',
              borderRight: '2px solid #808080',
              borderBottom: '2px solid #808080',
              cursor: 'pointer',
              minWidth: '160px',
              maxWidth: '200px',
              height: '34px',
              color: '#000'
            }}
          >
            <img
              src={window.icon}
              alt={window.title}
              style={{ 
                width: '16px', 
                height: '16px',
                opacity: minimizedWindows.includes(window.id) ? 0.6 : 1
              }}
            />
            <span
              style={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: '12px',
                opacity: minimizedWindows.includes(window.id) ? 0.6 : 1
              }}
            >
              {window.title}
            </span>
          </motion.button>
        ))}
      </div>

      {/* System Tray */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0 8px',
          height: '34px',
          background: '#c0c0c0',
          border: '2px inset #808080'
        }}
      >
        <img
          src={`/assets/icons/volume-${volume > 0 ? 'on' : 'off'}.png`}
          alt="Volume"
          style={{ width: '16px', height: '16px' }}
        />
        <div
          style={{
            padding: '4px 8px',
            fontSize: '12px',
            fontFamily: 'monospace',
            color: '#000'
          }}
        >
          {format(systemTime, 'HH:mm')}
        </div>
      </div>
    </div>
  );
}; 