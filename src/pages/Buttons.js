import React from 'react';
import BackButton from '../components/BackButton'; // adjust path if needed
import DocumentationButton from '../components/DocumentationButton';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';

const Buttons = () => {

  return (
    <div className="page-wrapper">
      <div className="page-header">
          <BackButton />
          <h2>Buttons</h2>
          <DocumentationButton rl="https://www.telerik.com/kendo-react-ui/components/buttons" />
        </div>
      
      <section>
        <h3>Button</h3>
        <p className="w-p-code">
          <span>themeColor = primary</span>
          <span>rounder = full</span>
        </p>
        <div className="ui-container">
          {/* UI Items */}
          <div className="ui-item">
            <h6 className="strong">Large & Solid</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="solid"
              size="large"
              disabled={true}
              
            >
              Open Dialog
            </Button>
            <p className="w-p-code">
              <span>fillMode = solid</span>
              <span>size = large</span>
            </p>
          </div>

          <div className="ui-item">
            <h6 className="strong">Large & Outline</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="outline"
              size="large"
              
            >
              Open Dialog
            </Button>
            <p className="w-p-code">
              <span>fillMode = outline</span>
              <span>size = large</span>
            </p>
          </div>

          <div className="ui-item">
            <h6 className="strong">Large & Link</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="link"
              size="large"
              
            >
              Open Dialog
            </Button>
            <p className="w-p-code">
              <span>fillMode = link</span>
              <span>size = large</span>
            </p>
          </div>

          <div className="ui-item">
            <h6 className="strong">Medium & Solid</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="solid"
              size="medium"
              
            >
              Open Dialog
            </Button>
            <p className="w-p-code">
              <span>fillMode = solid</span>
              <span>size = medium</span>
            </p>
          </div>

          <div className="ui-item">
            <h6 className="strong">Medium & Outline</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="outline"
              size="medium"
              
            >
              Open Dialog
            </Button>
            <p className="w-p-code">
              <span>fillMode = outline</span>
              <span>size = medium</span>
            </p>
          </div>

          <div className="ui-item">
            <h6 className="strong">Medium & Link</h6>
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="link"
              size="medium"
              
            >
              Open Dialog
            </Button>
            <p className="w-p-code">
              <span>fillMode = link</span>
              <span>size = medium</span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <h3>ButtonGroup</h3>
          <p className="w-p-code">
            <span>themeColor = primary</span>
            <span>rounder = full</span>
          </p>
      
          <div className="ui-container">

            {/* UI Items */}
            <div className="ui-item">
              <h6 className="strong">Medium & Solid</h6>
              <ButtonGroup>
                  <Button
                    themeColor="primary"
                    rounded="full"
                  >
                      First
                  </Button>
                  <Button
                    themeColor="primary"
                    rounded="full"
                  >
                      Middle
                  </Button>
                  <Button
                    themeColor="primary"
                    rounded="full"
                  >
                      Last
                  </Button>
              </ButtonGroup>
              <p className="w-p-code">
              <span>fillMode = solid</span>
              <span>size = medium</span>
                Apply classnames directly to the Buttons.
                
              </p>
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
                  >
                    First
                  </Button>
                  <Button
                    themeColor="primary"
                    rounded="full"
                    fillMode="outline"
                    size="medium"
                  >
                    Middle
                  </Button>
                  <Button
                    themeColor="primary"
                    rounded="full"
                    fillMode="outline"
                    size="medium"
                  >
                    Last
                  </Button>
              </ButtonGroup>
              <p className="w-p-code">
                <span>fillMode = outline</span>
                <span>size = medium</span>
                Apply classnames directly to the Buttons.
              </p>
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
                  >
                    First
                  </Button>
                  <Button
                    themeColor="primary"
                    rounded="full"
                    fillMode="flat"
                    size="medium"
                  >
                    Middle
                  </Button>
                  <Button
                    themeColor="primary"
                    rounded="full"
                    fillMode="flat"
                    size="medium"
                  >
                    Last
                  </Button>
              </ButtonGroup>
              <p className="w-p-code">
                <span>fillMode = flat</span>
                <span>size = medium</span>
                Apply classnames directly to the Buttons.
              </p>
            </div>

          </div>
      </section>
    </div>
  );
};

export default Buttons;
