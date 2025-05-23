// src/components/BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@progress/kendo-react-buttons';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className='header-btn back-btn'>
      <Button
        icon="border-style"
        onClick={() => navigate(-1)}
        themeColor="primary"
        rounded="full"
        fillMode="link"
        size="large"
        className="w-back-button"
      >
        Back
      </Button>
    </div>
  );
};

export default BackButton;
