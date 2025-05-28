import Button from '@progress/kendo-react-buttons';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardActions } from '@progress/kendo-react-layout';

const App = () => {
  return (
    <Card orientation="vertical" className="">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardSubtitle>Card Subtitle</CardSubtitle>
      </CardHeader>
      <CardBody>Check this out</CardBody>
      <CardActions layout="stretched">
        <Button
          themeColor="primary"
          rounded="full"
          fillMode="solid"
          size="large"
        >
          Solid
        </Button>
        <Button
          themeColor="primary"
          rounded="full"
          fillMode="outline"
          size="large"
        >
          Outline
        </Button>
      </CardActions>

    </Card>
  );
};

export default App;