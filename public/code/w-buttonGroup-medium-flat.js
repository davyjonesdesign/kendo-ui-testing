import {Button, ButtonGroup} from '@progress/kendo-react-buttons';

const App = () => {
  return (
    <ButtonGroup>
        <Button
          themeColor="primary"
          rounded="full"
          fillMode="flat"
          size="medium"
        >First</Button>
        <Button
          themeColor="primary"
          rounded="full"
          fillMode="flat"
          size="medium"
        >Middle</Button>
        <Button
          themeColor="primary"
          rounded="full"
          fillMode="flat"
          size="medium"
        >Last</Button>
    </ButtonGroup>
  );
};

export default App;