import React, { useState } from 'react';
import { motion } from 'framer-motion';
import userConfig from '../config/userConfig';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(userConfig.projects.map(p => p.category)));

  const filteredProjects = selectedCategory
    ? userConfig.projects.filter(p => p.category === selectedCategory)
    : userConfig.projects;

  return (
    <div style={{ padding: '16px', height: '100%', overflow: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: '#000080' }}>My Projects</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setSelectedCategory(null)}
              style={{
                padding: '4px 12px',
                background: !selectedCategory ? '#000080' : '#c0c0c0',
                color: !selectedCategory ? '#fff' : '#000',
                border: '2px solid #fff',
                borderRight: '2px solid #808080',
                borderBottom: '2px solid #808080',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '4px 12px',
                  background: selectedCategory === category ? '#000080' : '#c0c0c0',
                  color: selectedCategory === category ? '#fff' : '#000',
                  border: '2px solid #fff',
                  borderRight: '2px solid #808080',
                  borderBottom: '2px solid #808080',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: '#fff',
                border: '2px solid #dfdfdf',
                borderRadius: '4px',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  height: '160px',
                  background: '#f0f0f0',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}
                >
                  {project.year}
                </div>
              </div>
              
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ color: '#000080', marginBottom: '8px', fontSize: '16px' }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  marginBottom: '16px', 
                  color: '#666', 
                  fontSize: '14px',
                  flex: 1,
                  lineHeight: '1.4'
                }}>
                  {project.description}
                </p>

                <div style={{ marginBottom: '16px' }}>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        background: '#f0f0f0',
                        color: '#666',
                        borderRadius: '4px',
                        fontSize: '12px',
                        marginRight: '4px',
                        marginBottom: '4px',
                        border: '1px solid #ddd'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      flex: 1,
                      padding: '6px 12px',
                      background: '#000080',
                      color: '#fff',
                      textDecoration: 'none',
                      textAlign: 'center',
                      fontSize: '12px',
                      border: '2px solid #fff',
                      borderRight: '2px solid #808080',
                      borderBottom: '2px solid #808080'
                    }}
                  >
                    View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '6px 12px',
                        background: '#c0c0c0',
                        color: '#000',
                        textDecoration: 'none',
                        fontSize: '12px',
                        border: '2px solid #fff',
                        borderRight: '2px solid #808080',
                        borderBottom: '2px solid #808080',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>🐙</span>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}; 