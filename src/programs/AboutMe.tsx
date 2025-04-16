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
            Quick Facts
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

        <div style={{ 
          marginBottom: '24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
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

          {/* Experience Section */}
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
              Experience
            </h3>
            <div style={{ padding: '12px' }}>
              {userConfig.experience.map((exp, index) => (
                <div key={index} style={{ 
                  marginBottom: index === userConfig.experience.length - 1 ? 0 : '16px',
                  paddingBottom: index === userConfig.experience.length - 1 ? 0 : '16px',
                  borderBottom: index === userConfig.experience.length - 1 ? 'none' : '1px solid #dfdfdf'
                }}>
                  <div style={{ 
                    fontSize: '13px', 
                    color: '#000080', 
                    marginBottom: '4px',
                    fontWeight: 'bold'
                  }}>
                    {exp.role}
                  </div>
                  <div style={{ fontSize: '12px', color: '#000', marginBottom: '2px' }}>
                    {exp.company}
                  </div>
                  <div style={{ fontSize: '11px', color: '#666', marginBottom: '6px' }}>
                    {exp.period}
                  </div>
                  <div style={{ 
                    fontSize: '12px',
                    color: '#000',
                    lineHeight: '1.4'
                  }}>
                    {exp.description}
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
          <div style={{ marginTop: '12px', display: 'flex', gap: '16px' }}>
            <a
              href={userConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: '#000080', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>🐙</span> GitHub
            </a>
            <a
              href={userConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                color: '#000080', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 