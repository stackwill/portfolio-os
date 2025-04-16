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
          System Information
        </h2>

        <div style={{ 
          background: '#f0f0f0',
          border: '2px solid #dfdfdf',
          borderRadius: '4px',
          padding: '16px',
          marginBottom: '16px'
        }}>
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
            AI Development Information
          </h3>
          <div style={{ padding: '12px' }}>
            <p style={{ fontSize: '13px', color: '#000', marginBottom: '12px', lineHeight: '1.6' }}>
              This portfolio OS was created with the assistance of AI technology, specifically using Cursor - an AI-powered IDE. The development process involved:
            </p>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              fontSize: '13px',
              color: '#000'
            }}>
              <li style={{ 
                marginBottom: '8px',
                paddingLeft: '20px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  color: '#000080'
                }}>•</span>
                AI-assisted code generation and optimization
              </li>
              <li style={{ 
                marginBottom: '8px',
                paddingLeft: '20px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  color: '#000080'
                }}>•</span>
                Intelligent component structuring and state management
              </li>
              <li style={{ 
                marginBottom: '8px',
                paddingLeft: '20px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  color: '#000080'
                }}>•</span>
                Real-time code suggestions and improvements
              </li>
              <li style={{ 
                marginBottom: '8px',
                paddingLeft: '20px',
                position: 'relative'
              }}>
                <span style={{ 
                  position: 'absolute',
                  left: 0,
                  color: '#000080'
                }}>•</span>
                Automated error detection and correction
              </li>
            </ul>
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
                { name: 'React', version: '18.2.0' },
                { name: 'TypeScript', version: '5.0.2' },
                { name: 'Zustand', version: '4.4.6' },
                { name: 'Framer Motion', version: '10.16.4' },
                { name: 'React-Rnd', version: '10.4.1' },
                { name: 'Vite', version: '4.4.5' }
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
                  <div style={{ color: '#666' }}>v{tech.version}</div>
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