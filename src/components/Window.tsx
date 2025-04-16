import React from 'react';
import { Rnd } from 'react-rnd';
import { motion, AnimatePresence } from 'framer-motion';
import { useSystemStore } from '../store/systemStore';

interface WindowProps {
  id: string;
  title: string;
  icon: string;
  children: React.ReactNode;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isMinimized: boolean;
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  icon,
  children,
  position,
  size,
  zIndex,
  isMinimized
}) => {
  const { closeWindow, minimizeWindow, setFocusedWindow } = useSystemStore();

  const handleClose = () => closeWindow(id);
  const handleMinimize = () => minimizeWindow(id);
  const handleFocus = () => setFocusedWindow(id);

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          <Rnd
            default={{
              x: position.x,
              y: position.y,
              width: size.width,
              height: size.height
            }}
            minWidth={200}
            minHeight={120}
            bounds="window"
            style={{
              zIndex,
              background: '#c0c0c0',
              border: '2px solid #dfdfdf',
              boxShadow: '2px 2px 5px rgba(0,0,0,0.2)'
            }}
            onMouseDown={handleFocus}
          >
            <div className="window-title-bar">
              <div className="window-title">
                <img src={icon} alt="" className="window-icon" />
                <span>{title}</span>
              </div>
              <div className="window-controls">
                <button onClick={handleMinimize} className="window-button minimize">
                  _
                </button>
                <button onClick={handleClose} className="window-button close">
                  ×
                </button>
              </div>
            </div>
            <div className="window-content">
              {children}
            </div>
          </Rnd>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 