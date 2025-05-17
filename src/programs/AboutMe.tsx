import React from 'react';
import { motion } from 'framer-motion';
import userConfig from '../config/userConfig';

export const AboutMe: React.FC = () => {
  return (
    <div style={{ padding: '16px', height: '100%', overflow: 'auto', background: '#fff' }}>
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
          About Me
        </h2>
        
        <div style={{ marginBottom: '24px' }}>
          <p style={{ 
            marginBottom: '16px', 
            lineHeight: '1.6',
            color: '#000',
            fontSize: '14px'
          }}>
            {userConfig.personal.bio}
          </p>
        </div>

        <div style={{ 
          marginBottom: '24px',
          background: '#f0f0f0',
          padding: '16px',
          border: '2px solid #dfdfdf',
          borderRadius: '4px'
        }}>
          <h3 style={{ color: '#000', marginBottom: '12px', borderBottom: '1px solid #000080', paddingBottom: '4px' }}>
            Hi 👋, I'm Will
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', color: '#000' }}>
              <span style={{ marginRight: '12px', fontSize: '20px' }}>🎓</span>
              <span style={{ fontSize: '14px' }}>{userConfig.personal.name}</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', color: '#000' }}>
              <span style={{ marginRight: '12px', fontSize: '20px' }}>💼</span>
              <span style={{ fontSize: '14px' }}>{userConfig.personal.role}</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', color: '#000' }}>
              <span style={{ marginRight: '12px', fontSize: '20px' }}>📍</span>
              <span style={{ fontSize: '14px' }}>{userConfig.personal.location}</span>
            </li>
          </ul>
        </div>

        {/* GitHub Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ 
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <a
            href="https://github.com/stackwill"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              background: 'linear-gradient(135deg, #2b3137 0%, #000000 100%)',
              color: 'white',
              padding: '16px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '18px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              width: '80%',
              transition: 'all 0.3s ease'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Check Out My GitHub
          </a>
        </motion.div>

        <div style={{ 
          marginBottom: '24px',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px'
        }}>
          {/* Skills Section */}
          <div style={{ 
            background: '#fff',
            border: '2px solid #dfdfdf',
            borderRadius: '4px',
            height: 'fit-content'
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
              Skills
            </h3>
            <div style={{ padding: '12px' }}>
              {Object.entries(
                userConfig.skills.reduce((acc, skill) => {
                  if (!acc[skill.category]) acc[skill.category] = [];
                  acc[skill.category].push(skill);
                  return acc;
                }, {} as Record<string, typeof userConfig.skills>)
              ).map(([category, skills]) => (
                <div key={category} style={{ marginBottom: '16px' }}>
                  <div style={{ 
                    fontSize: '13px', 
                    color: '#000080', 
                    marginBottom: '8px',
                    fontWeight: 'bold'
                  }}>
                    {category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {skills.map(skill => (
                      <div
                        key={skill.name}
                        style={{
                          background: '#f0f0f0',
                          color: '#000',
                          padding: '4px 8px',
                          fontSize: '12px',
                          border: '1px solid #dfdfdf',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>{skill.icon}</span>
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '24px', 
          fontSize: '13px', 
          color: '#666',
          background: '#f9f9f9',
          padding: '12px',
          borderRadius: '4px',
          border: '1px solid #dfdfdf'
        }}>
          <p>
            Want to know more? Check out my projects or get in touch through the Contact app!
          </p>
        </div>
      </motion.div>
    </div>
  );
}; 