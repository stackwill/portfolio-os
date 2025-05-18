import React from 'react';
import { motion } from 'framer-motion';
import userConfig from '../config/userConfig';

export const Contact: React.FC = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: userConfig.social.github },
    ...(userConfig.social.twitter ? [{ name: 'Twitter', icon: '🐦', url: userConfig.social.twitter }] : []),
    ...(userConfig.social.website ? [{ name: 'Website', icon: '🌐', url: userConfig.social.website }] : [])
  ];

  return (
    <div style={{ padding: '24px', height: '100%', overflow: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 style={{ marginBottom: '24px', color: '#000080', borderBottom: '2px solid #000080', paddingBottom: '8px' }}>Contact Me</h2>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px',
          background: '#f0f0f0',
          border: '2px solid #dfdfdf',
          borderRadius: '4px',
          padding: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: '#000080', marginBottom: '16px' }}>Get In Touch</h3>
            
            <motion.a
              href="mailto:williamjhanlon@icloud.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: '#000080',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                border: '1px solid #000060',
                fontSize: '16px'
              }}
            >
              <span style={{ fontSize: '20px' }}>📧</span>
              <span>williamjhanlon@icloud.com</span>
            </motion.a>
          </div>
        </div>

        <div style={{ 
          background: '#f0f0f0',
          border: '2px solid #dfdfdf',
          borderRadius: '4px',
          padding: '24px'
        }}>
          <h3 style={{ color: '#000080', marginBottom: '16px', textAlign: 'center' }}>Check my GitHub</h3>
          <div style={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {socialLinks.map(social => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: '#000080',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                  border: '1px solid #000060'
                }}
              >
                <span style={{ fontSize: '20px' }}>{social.icon}</span>
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 