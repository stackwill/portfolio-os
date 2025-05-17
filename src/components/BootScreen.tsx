import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const bootMessages = [
  { text: '[    0.000000] Linux version 6.5.0-portfolio (portfolio@build) (gcc version 12.2.0)', type: 'kernel', delay: 40 },
  { text: '[    0.000000] Command line: BOOT_IMAGE=/boot/portfolio-os root=UUID=1234-5678', type: 'kernel', delay: 20 },
  { text: '[    0.000000] x86/CPU: Detected 8-Core Intel(R) Core(TM) i7-9700K CPU @ 3.60GHz', type: 'kernel', delay: 60 },
  { text: '[    0.045876] Memory: 16384MB DDR4-3200 available', type: 'kernel', delay: 30 },
  { text: '[    0.046012] ACPI: Core revision 20230331', type: 'kernel', delay: 15 },
  { text: '[    0.169529] Site by William Hanlon', type: 'success', delay: 150 },
  { text: '[    0.046891] CPU0: Intel(R) Core(TM) i7-9700K stepping 13', type: 'kernel', delay: 45 },
  { text: '[    0.047123] CPU1: Package temperature above threshold', type: 'warning', delay: 300 },
  { text: '[    0.047234] CPU1: Package temperature/speed normal', type: 'success', delay: 75 },
  { text: '[    0.089234] Initializing cgroup subsys cpu', type: 'kernel', delay: 40 },
  { text: '[    0.091234] Initializing portfolio subsystems', type: 'kernel', delay: 50 },
  { text: '[    0.091765] Loading modules: developer_skills[javascript,typescript,react]', type: 'kernel', delay: 60 },
  { text: '[    0.091832] Loading modules: backend_skills[node,express,python]', type: 'kernel', delay: 55 },
  { text: '[    0.092123] systemd[1]: systemd v254 running in system mode', type: 'systemd', delay: 110 },
  { text: '[    0.092567] systemd[1]: Detected architecture x86_64', type: 'systemd', delay: 20 },
  { text: '[    0.093012] systemd[1]: Running in privileged mode', type: 'systemd', delay: 30 },
  { text: '[    0.095432] Checking system integrity', type: 'info', delay: 80 },
  { text: '[    0.096123] Initializing project showcase v1.2', type: 'service', delay: 50 },
  { text: '[    0.156234] systemd[1]: Mounting virtual filesystems...', type: 'mount', delay: 220 },
  { text: '[    0.157891] systemd[1]: Starting Journal Service...', type: 'service', delay: 200 },
  { text: '[    0.158234] systemd[1]: Starting User Manager...', type: 'service', delay: 150 },
  { text: '[    0.159567] systemd[1]: Starting Network Manager...', type: 'service', delay: 250 },
  { text: '[    0.161234] systemd[1]: Mounting /home...', type: 'mount', delay: 180 },
  { text: '[    0.162891] systemd[1]: Starting System Logger...', type: 'service', delay: 130 },
  { text: '[    0.164567] systemd[1]: Starting Portfolio Display Manager...', type: 'service', delay: 450 },
  { text: '[    0.165123] Loading portfolio projects...', type: 'service', delay: 150 },
  { text: '[    0.166234] systemd[1]: Reached target Local File Systems', type: 'target', delay: 70 },
  { text: '[    0.167891] systemd[1]: Reached target Network', type: 'target', delay: 300 },
  { text: '[    0.169567] Started Portfolio Display Manager', type: 'success', delay: 150 },
  { text: '[    0.169529] Site by William Hanlon', type: 'success', delay: 150 },
  { text: '[    0.171234] Reached target Graphical Interface', type: 'success', delay: 200 },
  { text: '[    0.172123] Resume loaded successfully', type: 'success', delay: 100 },
  { text: '[    0.172891] Starting Portfolio OS Desktop...', type: 'info', delay: 350 }
];

export const BootScreen: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (currentMessage < bootMessages.length) {
      const timer = setTimeout(() => {
        setCurrentMessage(prev => prev + 1);
      }, bootMessages[currentMessage].delay);
      return () => clearTimeout(timer);
    }
  }, [currentMessage]);

  const getMessageColor = (type: string) => {
    switch (type) {
      case 'kernel': return '#fff';
      case 'systemd': return '#0087ff';
      case 'service': return '#00ff87';
      case 'mount': return '#87ff00';
      case 'target': return '#ff8700';
      case 'warning': return '#ffff00';
      case 'success': return '#00ff00';
      case 'error': return '#ff0000';
      default: return '#aaa';
    }
  };

  const getPrefix = (type: string) => {
    switch (type) {
      case 'kernel': return '';
      case 'systemd': return 'systemd[1]:';
      case 'service': return 'systemd[1]:';
      case 'mount': return 'systemd[1]:';
      case 'target': return 'systemd[1]:';
      case 'warning': return '[WARN]';
      case 'error': return '[ERROR]';
      case 'success': return '[OK]';
      default: return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        background: '#000',
        color: '#fff',
        height: '100vh',
        width: '100vw',
        padding: '1rem',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        whiteSpace: 'pre-wrap',
        overflow: 'hidden',
        letterSpacing: '0.05em'
      }}
    >
      <div>
        {bootMessages.slice(0, currentMessage + 1).map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            style={{ 
              marginBottom: '0.2rem',
              color: getMessageColor(message.type),
              display: 'flex',
              alignItems: 'flex-start',
              fontWeight: message.type === 'kernel' ? 'normal' : 'bold'
            }}
          >
            <span style={{ 
              marginRight: '8px',
              color: message.type === 'kernel' ? '#fff' : getMessageColor(message.type)
            }}>
              {getPrefix(message.type)}
            </span>
            <span>
              {message.text}
              {index === currentMessage && (
                <span style={{ animation: 'blink 1s infinite' }}>_</span>
              )}
            </span>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>
    </motion.div>
  );
}; 