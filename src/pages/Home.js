import React from 'react';
import SearchTextBox from './SearchTextBox.js'; // adjust path as needed

const Home = () => {
  return (
    <div className="page-wrapper home">
      <div className='page-header'>
        <h2>Wheels Kendo UI Testing</h2>
        <p>A place to test Wheels' Kendo ThemeBuilder components</p>
      </div>
      <section>
        <SearchTextBox />

      </section>
    </div>
  );
};

export default Home;
