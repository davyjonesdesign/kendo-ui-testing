import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Format = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/buttons">Buttons</Link>
        <Link to="/w-calendar-inline">w-calendar-inline</Link>
        <Link to="/dialogs">Dialogs</Link>
        <Link to="/inputs">Inputs</Link>
        <Link to="/layout">Layout</Link>
        <Link to="/custom">Custom</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Format;
