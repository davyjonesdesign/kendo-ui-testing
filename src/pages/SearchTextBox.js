import React from 'react';
import {
  Button
} from '@progress/kendo-react-buttons';
import {
  InputClearValue,
  InputSeparator,
  InputSuffix,
  TextBox
} from '@progress/kendo-react-inputs';

import {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle
} from '@progress/kendo-react-layout';

import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';
import searchIndex from '../data/searchIndex.js'; // adjust path if needed

const EMPTY_VALUE = "";


const SearchTextBox = () => {
  const [value, setValue] = React.useState("");
  const [results, setResults] = React.useState(searchIndex);

  const handleChange = React.useCallback(event => {
  const newValue = event.target.value;
  setValue(newValue);

  if (newValue.trim() !== "") {
    const filtered = searchIndex.filter(item =>
      item.title.toLowerCase().includes(newValue.toLowerCase()) ||
      item.description.toLowerCase().includes(newValue.toLowerCase())
    );
    setResults(filtered);
  } else {
    setResults(searchIndex); // show all if input is empty
  }
}, []);


  const handleClear = React.useCallback(() => {
  setValue(EMPTY_VALUE);
  setResults(searchIndex);
}, []);

const navigate = useNavigate();

  return (
    <div className="search-textbox-wrapper">
      <TextBox
        value={value}
        onChange={handleChange}
        placeholder="Search components..."
        suffix={() => <>
          {value !== EMPTY_VALUE &&
            <InputClearValue onClick={handleClear}>
              <span className="k-icon k-font-icon k-i-clear"></span>
            </InputClearValue>}
          <InputSeparator />
          <InputSuffix>
            <Button
              themeColor="primary"
              fillMode={'flat'}
              iconClass="k-icon k-font-icon k-i-search w-icon-search"
              type='button'
            />
          </InputSuffix>
        </>}
      />
      <h6 class="results-header strong">Results</h6>
      {results.length > 0 && (
        <div className="search-results">
          {results.map((item, index) => (
              <Card onClick={() => navigate(item.url)} key={index}  orientation="horizontal" className="w-block-link-horizontal w-search-block-link">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardSubtitle>{item.description}</CardSubtitle>
                </CardHeader>
                <div className="w-trailing-icon-wrapper">
                  <span className="k-icon k-font-icon k-i-gear" role="presentation"></span>
                </div>
              </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchTextBox;
