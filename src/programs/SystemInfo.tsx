import React from 'react';
import { motion } from 'framer-motion';

export const SystemInfo: React.FC = () => {
  return (
    <div style={{ 
      padding: '16px', 
      height: '100%', 
      overflow: 'auto', 
      background: '#fff',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 style={{ 
          marginBottom: '16px', 
          color: '#000', 
          borderBottom: '2px solid #000080',
          paddingBottom: '8px'
        }}>
          About This Site
        </h2>

        <div style={{ 
          background: '#f0f0f0',
          border: '2px solid #dfdfdf',
          borderRadius: '4px',
          padding: '16px',
          marginBottom: '16px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ 
              color: '#000', 
              marginBottom: '12px', 
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              Portfolio OS
            </h3>
            <div style={{ fontSize: '13px', color: '#000', lineHeight: '1.6' }}>
              <div>Version: 1.0.0</div>
              <div>Build Date: {new Date().toLocaleDateString()}</div>
              <div>Framework: React + TypeScript</div>
              <div>State Management: Zustand</div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://github.com/stackwill/portfolio-os"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #2b3137 0%, #000000 100%)',
                color: 'white',
                padding: '16px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                width: '120px',
                height: '120px',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="white"
                style={{ marginBottom: '8px' }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View
            </a>
          </motion.div>
        </div>

        <div style={{ 
          background: '#fff',
          border: '2px solid #dfdfdf',
          borderRadius: '4px',
          marginBottom: '16px'
        }}>
          <h3 style={{ 
            color: '#000', 
            padding: '8px 12px',
            margin: 0,
            background: '#f0f0f0',
            borderBottom: '1px solid #dfdfdf',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Site
          </h3>
          <div style={{ padding: '12px' }}>
            <p style={{ fontSize: '13px', color: '#000', marginBottom: '12px', lineHeight: '1.6' }}>
               Portfolio OS is a full web based operating system to showcase my projects and skills. There is an app registry and template for easily creating new apps, with window management and basic compositing. I created Portfolio OS with the help of an AI IDE, Cursor. 
            </p>
          </div>
        </div>

        <div style={{ 
          background: '#fff',
          border: '2px solid #dfdfdf',
          borderRadius: '4px'
        }}>
          <h3 style={{ 
            color: '#000', 
            padding: '8px 12px',
            margin: 0,
            background: '#f0f0f0',
            borderBottom: '1px solid #dfdfdf',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            Technologies Used
          </h3>
          <div style={{ padding: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                { name: 'React' },
                { name: 'TypeScript' },
                { name: 'Zustand' },
                { name: 'Framer Motion' },
                { name: 'React-Rnd' },
                { name: 'Vite' }
              ].map(tech => (
                <div
                  key={tech.name}
                  style={{
                    background: '#f0f0f0',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: '#000',
                    border: '1px solid #dfdfdf'
                  }}
                >
                  <div style={{ fontWeight: 'bold' }}>{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '16px',
          fontSize: '12px',
          color: '#666',
          textAlign: 'center'
        }}>
          Created with ❤️ and AI by William Hanlon
        </div>
      </motion.div>
    </div>
  );
}; 