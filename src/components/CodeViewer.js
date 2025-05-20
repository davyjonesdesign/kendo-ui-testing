import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeViewer = ({ filePath, language = 'javascript', useLight = false }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(filePath)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load: ${filePath}`);
        return res.text();
      })
      .then(setCode)
      .catch(err => setError(err.message));
  }, [filePath]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ position: 'relative', marginTop: '1.5rem' }}>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          right: '0.5rem',
          top: '0.5rem',
          zIndex: 1,
          padding: '4px 8px',
          fontSize: '0.8rem',
          background: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <SyntaxHighlighter
        language={language}
        style={useLight ? oneLight : materialDark}
        customStyle={{ borderRadius: '8px', paddingTop: '2rem' }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeViewer;
