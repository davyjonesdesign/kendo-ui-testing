import React, { useEffect, useState } from 'react';
import { Button } from '@progress/kendo-react-buttons';

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
    <div className='codeViewer'>
      <div className='codeViewer-header'>
        <h5>Source Code</h5>
        <Button
          onClick={handleCopy}
          themeColor="primary"
          rounded="full"
          fillMode="outline"
          size="medium" >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
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
