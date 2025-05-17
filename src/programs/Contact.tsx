import React, { useState } from 'react';
import { motion } from 'framer-motion';
import userConfig from '../config/userConfig';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'success', message: 'Message sent successfully!' });
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: userConfig.social.github },
    ...(userConfig.social.twitter ? [{ name: 'Twitter', icon: '🐦', url: userConfig.social.twitter }] : []),
    ...(userConfig.social.website ? [{ name: 'Website', icon: '🌐', url: userConfig.social.website }] : [])
  ];

  return (
    <div style={{ padding: '16px', height: '100%', overflow: 'auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 style={{ marginBottom: '16px', color: '#000080' }}>Contact Me</h2>

        <div style={{ marginBottom: '24px' }}>
          <h3 style={{ color: '#000080', marginBottom: '8px' }}>Social Links</h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            {socialLinks.map(social => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 16px',
                  background: '#000080',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px'
                }}
              >
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '4px',
                color: '#000080'
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '2px inset #fff'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '4px',
                color: '#000080'
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '2px inset #fff'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '4px',
                color: '#000080'
              }}
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '8px',
                border: '2px inset #fff'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '4px',
                color: '#000080'
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '8px',
                border: '2px inset #fff',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '8px 24px',
              background: '#000080',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>

          {status.type && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                marginTop: '16px',
                padding: '8px',
                background: status.type === 'success' ? '#d4edda' : '#f8d7da',
                color: status.type === 'success' ? '#155724' : '#721c24',
                borderRadius: '4px'
              }}
            >
              {status.message}
            </motion.div>
          )}
        </form>

        <div style={{ marginTop: '24px', fontSize: '14px', color: '#666' }}>
          <p>
            You can also reach me directly at:{' '}
            <a
              href={`mailto:${userConfig.social.email}`}
              style={{ color: '#000080' }}
            >
              {userConfig.social.email}
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}; 