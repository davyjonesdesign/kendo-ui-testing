import {Button, ButtonGroup} from '@progress/kendo-react-buttons';

const App = () => {
  return (
   <ButtonGroup>
      <Button
        themeColor="primary"
        rounded="full"
      >First</Button>
      <Button
        themeColor="primary"
        rounded="full"
      >Middle</Button>
      <Button
        themeColor="primary"
        rounded="full"
      >Last</Button>
  </ButtonGroup>
  );
};

export default App;