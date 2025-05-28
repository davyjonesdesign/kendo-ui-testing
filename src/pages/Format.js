import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Format = () => {
  return (
    <div>
      <div className='nav-wrapper'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/buttons">Buttons</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/chips">Chips</Link>
          <Link to="/custom">Custom</Link>
          <Link to="/dialogs">Dialogs</Link>
          <Link to="/inputs">Inputs</Link>
          <Link to="/search-textbox">Search TextBox</Link>
          <Link to="/tabstrip">TabStrip</Link>
          <Link to="/w-calendar-inline">w-calendar-inline</Link>

        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Format;
