import React from 'react';
import BackButton from '../components/BackButton'; // adjust path if needed
import DocumentationButton from '../components/DocumentationButton';
import { Button } from '@progress/kendo-react-buttons';
import CodeViewer from '../components/CodeViewer';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';

const StatusTitleBar = () => {
  return (
      <div className="w-dialog-titlebar-status w-dialog-titlebar-error">
          <span className="k-icon k-font-icon k-i-star" role="presentation"></span>
      </div>
  );
};

const Dialogs = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  
  return (
    <div className="page-wrapper">
      <div className='head-wrapper'>
        <div className="page-header">
          <BackButton />
          <h2>Dialogs</h2>
          <DocumentationButton rl="https://www.telerik.com/kendo-react-ui/components/dialogs" />
        </div>
      </div>

      <section>
        <div className="ui-container">
          
          {/* UI Items */}
          <div className="ui-item">
            <Button
              themeColor="primary"
              rounded="full"
              fillMode="link"
              size="medium"
              onClick={toggleDialog}
            >
              Open Status Dialog
            </Button>

            {visible && (
              <Dialog title={<StatusTitleBar />} onClose={toggleDialog} className='w-dialog-status w-dialog-error'>
                
                <p>Are you sure you want to continue?</p>
                <DialogActionsBar>
                  <Button
                    type="button"
                    onClick={toggleDialog}
                    themeColor="primary"
                    rounded="full"
                    fillMode="outline"
                    size="large"
                  >
                    No, cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={toggleDialog}
                    themeColor="primary"
                    rounded="full"
                    fillMode="solid"
                    size="large"
                  >
                    Yes, confirm
                  </Button>
                </DialogActionsBar>
              </Dialog>
            )}
            
          </div>

          
        </div>
        </section>
        <section>
        <CodeViewer filePath="/kendo-ui-testing/code/Dialogs.js"  useLight={true} />

        </section>
      


      
    </div>
  );
};

export default Dialogs;
