// src/components/DocumentationButton.js
import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

const DocumentationButton = ({ url }) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      icon="replace-single"
      themeColor="primary"
      rounded="full"
      fillMode="link"
      size="large"
      onClick={handleClick}
      className="w-docs-button"
    >
      Documentation
    </Button>
  );
};

export default DocumentationButton;
