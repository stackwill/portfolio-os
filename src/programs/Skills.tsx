import React from 'react';
import { motion } from 'framer-motion';
import userConfig from '../config/userConfig';

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(userConfig.skills.map(skill => skill.category)));

  return (
    <div style={{ padding: '16px', height: '100%', overflow: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 style={{ marginBottom: '16px', color: '#000080' }}>Skills & Experience</h2>

        {categories.map((category, categoryIndex) => (
          <div key={category} style={{ marginBottom: '32px' }}>
            <h3 style={{ color: '#000080', marginBottom: '16px' }}>{category}</h3>
            
            <div style={{ display: 'grid', gap: '16px' }}>
              {userConfig.skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                  >
                    <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '20px' }}>{skill.icon}</span>
                      <span style={{ fontWeight: 'bold' }}>{skill.name}</span>
                      <span style={{ marginLeft: 'auto', color: '#666' }}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div
                      style={{
                        width: '100%',
                        height: '8px',
                        background: '#f0f0f0',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                        style={{
                          height: '100%',
                          background: '#000080',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: '32px' }}>
          <h3 style={{ color: '#000080', marginBottom: '16px' }}>Experience</h3>
          
          <div style={{ display: 'grid', gap: '16px' }}>
            {userConfig.experience.map((experience, index) => (
              <motion.div
                key={experience.period}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '16px',
                  background: '#fff',
                  border: '2px solid #dfdfdf',
                  borderRadius: '4px'
                }}
              >
                <div style={{ color: '#666', fontSize: '14px', marginBottom: '4px' }}>
                  {experience.period}
                </div>
                <div style={{ fontWeight: 'bold', color: '#000080', marginBottom: '4px' }}>
                  {experience.role}
                </div>
                <div style={{ color: '#333', marginBottom: '8px' }}>
                  {experience.company}
                </div>
                <div style={{ color: '#666' }}>
                  {experience.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 