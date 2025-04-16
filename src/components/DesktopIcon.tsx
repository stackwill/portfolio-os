import React from 'react';
import { motion } from 'framer-motion';
import { useSystemStore } from '../store/systemStore';
import { Program } from '../programs/registry';

interface DesktopIconProps {
  program: Program;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ program }) => {
  const { openWindow } = useSystemStore();
  const [isSelected, setIsSelected] = React.useState(false);

  const handleDoubleClick = () => {
    openWindow(program);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSelected(true);
  };

  React.useEffect(() => {
    const handleClickOutside = () => {
      setIsSelected(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{
        width: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8px',
        cursor: 'pointer',
        background: isSelected ? 'rgba(0, 0, 128, 0.3)' : 'transparent',
        borderRadius: '4px'
      }}
    >
      <motion.img
        src={program.icon}
        alt={program.name}
        style={{
          width: '32px',
          height: '32px',
          marginBottom: '4px'
        }}
        animate={isSelected ? { scale: [1, 1.1, 1] } : {}}
      />
      <motion.div
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: '12px',
          textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
          wordBreak: 'break-word',
          padding: '2px 4px',
          background: isSelected ? 'rgba(0, 0, 128, 0.3)' : 'transparent'
        }}
      >
        {program.name}
      </motion.div>
    </motion.div>
  );
}; 