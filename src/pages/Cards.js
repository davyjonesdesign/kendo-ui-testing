import BackButton from '../components/BackButton'; // adjust path if needed
import DocumentationButton from '../components/DocumentationButton';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import CodeViewer from '../components/CodeViewer';


const Cards = () => {

  return (
    <div className="page-wrapper">
      <div className='head-wrapper'>
        <div className="page-header">
          <BackButton />
          <h2>Cards</h2>
          <DocumentationButton rl="https://www.telerik.com/kendo-react-ui/components/buttons" />
        </div>
      </div>
      
      <section>
        <div className="ui-container">
          {/* UI Items */}
          <div className="ui-item">
            <h6 className="strong">Default</h6>
            <Card orientation="vertical" className="">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                </CardHeader>
                <CardBody>Some quick example text to build on the card title and make up the bulk of the card content.</CardBody>
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
            <CodeViewer filePath="/kendo-ui-testing/code/Card.js"  useLight={true} />
          </div>

          {/* UI Items */}
          <div className="ui-item">
            <h6 className="strong">Ghost Card</h6>
            <Card orientation="vertical" className="w-ghost-card-vertical">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                </CardHeader>
                <CardBody>Some quick example text to build on the card title and make up the bulk of the card content.</CardBody>
                <CardActions>
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
            <CodeViewer filePath="/kendo-ui-testing/code/CardGhost.js"  useLight={true} />
          </div>

          {/* UI Items */}
          <div className="ui-item">
            <h6 className="strong">Notable Card</h6>
            <Card orientation="vertical" className="w-notable-card-vertical">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardSubtitle>Card Subtitle</CardSubtitle>
                </CardHeader>
                <CardBody>Some quick example text to build on the card title and make up the bulk of the card content.</CardBody>
                <CardActions>
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
            <CodeViewer filePath="/kendo-ui-testing/code/CardNotable.js"  useLight={true} />
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Cards;
