import React, { useEffect } from 'react';
import { Desktop } from './components/Desktop';
import { useSystemStore } from './store/systemStore';
import { programs } from './programs/registry';
import './styles/global.css';

const App: React.FC = () => {
  const { installedPrograms } = useSystemStore();

  useEffect(() => {
    // Initialize the system with available programs
    useSystemStore.setState({ installedPrograms: programs });

    // Set up system time update
    const timeInterval = setInterval(() => {
      useSystemStore.setState({ systemTime: new Date() });
    }, 1000);

    // Auto-open "About This Site" app after 2 seconds
    const aboutThisSiteApp = programs.find(program => program.id === 'system-info');
    if (aboutThisSiteApp) {
      const openTimer = setTimeout(() => {
        useSystemStore.getState().openWindow(aboutThisSiteApp);
      }, 2000);
      
      return () => {
        clearInterval(timeInterval);
        clearTimeout(openTimer);
      };
    }

    return () => clearInterval(timeInterval);
  }, []);

  return <Desktop />;
};

export default App;
