import React, { useState } from 'react';

export const Notepad: React.FC = () => {
  const [content, setContent] = useState('');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          padding: '4px',
          borderBottom: '1px solid #808080'
        }}
      >
        <button
          style={{
            padding: '2px 8px',
            marginRight: '4px',
            background: '#c0c0c0',
            border: '2px solid #fff',
            borderRight: '2px solid #808080',
            borderBottom: '2px solid #808080',
            cursor: 'pointer'
          }}
        >
          File
        </button>
        <button
          style={{
            padding: '2px 8px',
            marginRight: '4px',
            background: '#c0c0c0',
            border: '2px solid #fff',
            borderRight: '2px solid #808080',
            borderBottom: '2px solid #808080',
            cursor: 'pointer'
          }}
        >
          Edit
        </button>
        <button
          style={{
            padding: '2px 8px',
            background: '#c0c0c0',
            border: '2px solid #fff',
            borderRight: '2px solid #808080',
            borderBottom: '2px solid #808080',
            cursor: 'pointer'
          }}
        >
          Help
        </button>
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          flex: 1,
          resize: 'none',
          padding: '8px',
          fontFamily: 'monospace',
          fontSize: '14px',
          border: 'none',
          outline: 'none',
          background: '#fff',
          color: '#000'
        }}
        placeholder="Type something..."
      />
      <div
        style={{
          padding: '4px',
          borderTop: '1px solid #808080',
          fontSize: '12px',
          color: '#808080'
        }}
      >
        {content.length} characters | Line 1, Column {content.length + 1}
      </div>
    </div>
  );
}; 