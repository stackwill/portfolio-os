import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSystemStore } from '../store/systemStore';
import { Window } from './Window';
import { StartMenu } from './StartMenu';
import { Taskbar } from './Taskbar';
import { DesktopIcon } from './DesktopIcon';
import { BootScreen } from './BootScreen';
import { LoginScreen } from './LoginScreen';

export const Desktop: React.FC = () => {
  const {
    isBooting,
    isLoggedIn,
    activeWindows,
    wallpaper,
    boot,
    installedPrograms
  } = useSystemStore();

  useEffect(() => {
    boot();
  }, []);

  if (isBooting) {
    return <BootScreen />;
  }

  if (!isLoggedIn) {
    return <LoginScreen />;
  }

  return (
    <motion.div
      className="desktop"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="desktop-icons">
        {installedPrograms.map(program => (
          <DesktopIcon
            key={program.id}
            program={program}
          />
        ))}
      </div>

      {activeWindows.map(window => (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          icon={window.icon}
          position={window.position}
          size={window.size}
          zIndex={window.zIndex}
          isMinimized={window.isMinimized}
        >
          {React.createElement(
            installedPrograms.find(p => p.id === window.programId)?.component || 'div'
          )}
        </Window>
      ))}

      <StartMenu />
      <Taskbar />
    </motion.div>
  );
}; 