import {Button, ButtonGroup} from '@progress/kendo-react-buttons';

const App = () => {
  return (
   <ButtonGroup>
      <Button
        themeColor="primary"
        rounded="full"
        fillMode="outline"
        size="medium"
      >First</Button>
      <Button
        themeColor="primary"
        rounded="full"
        fillMode="outline"
        size="medium"
      >Middle</Button>
      <Button
        themeColor="primary"
        rounded="full"
        fillMode="outline"
        size="medium"
      >Last</Button>
  </ButtonGroup>
  );
};

export default App;