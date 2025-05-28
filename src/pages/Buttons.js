import BackButton from '../components/BackButton'; // adjust path if needed
import DocumentationButton from '../components/DocumentationButton';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import CodeViewer from '../components/CodeViewer';


const Buttons = () => {

  return (
    <div className="page-wrapper">
      <div className='head-wrapper'>
        <div className="page-header">
          <BackButton />
          <h2>Buttons</h2>
          <DocumentationButton rl="https://www.telerik.com/kendo-react-ui/components/buttons" />
        </div>
      </div>
      
      <section>
        <h3>Button</h3>

        <div className="ui-container">
          {/* UI Items */}
          <div className="ui-item">
            <h6 className="strong">Large Solid</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="solid"
              size="large"
            >
              Button Label
            </Button>
            <CodeViewer filePath="/kendo-ui-testing/code/w-button-large-solid.js"  useLight={true} />
          </div>

          {/* UI Items */}
          <div className="ui-item">
            <h6 className="strong">Large Outline</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="outline"
              size="large"
            >
              Button Label
            </Button>
            <CodeViewer filePath="/kendo-ui-testing/code/w-button-large-outline.js"  useLight={true} />
          </div>

          <div className="ui-item">
            <h6 className="strong">Large Link</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="link"
              size="large"              
            >
              Button Label
            </Button>
            <CodeViewer filePath="/kendo-ui-testing/code/w-button-large-link.js"  useLight={true} />
          </div>

          <div className="ui-item">
            <h6 className="strong">Medium Solid</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="solid"
              size="medium"
              
            >
              Button Label
            </Button>
            <CodeViewer filePath="/kendo-ui-testing/code/w-button-medium-solid.js"  useLight={true} />
          </div>

          <div className="ui-item">
            <h6 className="strong">Medium Outline</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="outline"
              size="medium"
              
            >
              Button Label
            </Button>
            <CodeViewer filePath="/kendo-ui-testing/code/w-button-medium-outline.js"  useLight={true} />
          </div>

          <div className="ui-item">
            <h6 className="strong">Medium Link</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="link"
              size="medium"
              
            >
              Button Label
            </Button>
            <CodeViewer filePath="/kendo-ui-testing/code/w-button-medium-link.js"  useLight={true} />
          </div>
        </div>
      </section>
      <section>
        <h3>ButtonGroup</h3>
      
          <div className="ui-container">
            {/* UI Items */}
            <div className="ui-item">
              <h6 className="strong">Medium Solid</h6>
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
              <CodeViewer filePath="/kendo-ui-testing/code/w-buttonGroup-medium-solid.js"  useLight={true} />

            </div>

             {/* UI Items */}
             <div className="ui-item">
              <h6 className="strong">Medium & Outline</h6>
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
               <CodeViewer filePath="/kendo-ui-testing/code/w-buttonGroup-medium-outline.js"  useLight={true} />
            </div>

            {/* UI Items */}
            <div className="ui-item">
              <h6 className="strong">Medium & Flat</h6>
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
               <CodeViewer filePath="/kendo-ui-testing/code/w-buttonGroup-medium-flat.js"  useLight={true} />
            </div>

          </div>
      </section>
    </div>
  );
};

export default Buttons;
