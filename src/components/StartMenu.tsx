import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSystemStore } from '../store/systemStore';

export const StartMenu: React.FC = () => {
  const { isStartMenuOpen, toggleStartMenu, installedPrograms, openWindow } = useSystemStore();

  const handleProgramClick = (program: any) => {
    openWindow(program);
    toggleStartMenu();
  };

  return (
    <AnimatePresence>
      {isStartMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.1 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '0',
            width: '280px',
            background: '#c0c0c0',
            border: '2px solid #fff',
            borderRight: '2px solid #808080',
            borderBottom: '2px solid #808080',
            boxShadow: '4px 4px 10px rgba(0,0,0,0.2)',
            zIndex: 9999
          }}
        >
          <div
            style={{
              padding: '8px 12px',
              background: 'linear-gradient(to right, #000080, #1084d0)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Guest User
          </div>

          <div style={{ padding: '4px' }}>
            {installedPrograms.map(program => (
              <motion.div
                key={program.id}
                whileHover={{ 
                  backgroundColor: '#000080', 
                  color: '#fff'
                }}
                style={{
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  color: '#000'
                }}
                onClick={() => handleProgramClick(program)}
              >
                <img
                  src={program.icon}
                  alt={program.name}
                  style={{ width: '24px', height: '24px' }}
                />
                <span style={{ fontSize: '14px' }}>{program.name}</span>
              </motion.div>
            ))}
          </div>

          <div
            style={{
              borderTop: '1px solid #808080',
              padding: '4px'
            }}
          >
            <motion.div
              whileHover={{ 
                backgroundColor: '#000080', 
                color: '#fff'
              }}
              style={{
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                borderRadius: '2px',
                color: '#000'
              }}
              onClick={() => {
                // Handle shutdown
              }}
            >
              <img
                src="/assets/icons/shutdown.png"
                alt="Shut Down"
                style={{ width: '24px', height: '24px' }}
              />
              <span style={{ fontSize: '14px' }}>Shut Down...</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 