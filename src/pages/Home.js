import SearchTextBox from '../components/SearchTextBox.js'; // adjust path as needed

const Home = () => {
  return (
    <div className="page-wrapper home">
      <div className='head-wrapper'>
        <div className='page-header'>
          <h2>Wheels Kendo UI Testing</h2>
          <p>A place to test Wheels' Kendo ThemeBuilder components</p>
        </div>
      </div>
      <section>
        <SearchTextBox />
      </section>
    </div>
  );
};

export default Home;
