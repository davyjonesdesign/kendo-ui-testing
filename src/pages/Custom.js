import React from 'react';
import BackButton from '../components/BackButton'; // adjust path if needed
import DocumentationButton from '../components/DocumentationButton';
import { Card, CardHeader, CardTitle, CardSubtitle } from '@progress/kendo-react-layout';

const Custom = () => {

  return (
    <div className="page-wrapper">
        <div className="page-header">
          <BackButton />
          <h2>Custom Components</h2>
          <DocumentationButton rl="https://docs.telerik.com/themebuilder/using-exported-styles/exported-package#using-the-custom-components-output" />
        </div>
          
        <section>
            <h3>Cards - Vertical</h3>
            <p className="w-p-code">
                <span>orientation="vertical"</span>
                <span>w-block-link-vertical</span>
            </p>
            <div className="ui-container">

              {/* UI Items */}
              <div className="ui-item">
                <h6 className="strong">Vertical Block Link</h6>
                <Card orientation="vertical" className="w-block-link-vertical">
                    <div className="w-icon-wrapper">
                        <span className="k-icon k-font-icon k-i-star" role="presentation"></span>
                    </div>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardSubtitle>Card Subtitle</CardSubtitle>
                    </CardHeader>
                    
                </Card>
                <p className='w-p-code'></p>
              </div>

              {/* status */}
              <div className="ui-item">
                <h6 className="strong">Vertical Block Link Status &#40;Info&#41; </h6>
                <Card orientation="vertical" className="w-block-link-vertical w-block-link-status">
                    <div className="w-icon-wrapper">
                        <span className="k-icon k-font-icon k-i-star" role="presentation"></span>
                    </div>
                    <CardHeader>
                        <CardTitle>
                            <span class="k-icon k-font-icon k-i-star w-block-link-status-icon">
                            </span>
                            Card Title
                        </CardTitle>
                        <CardSubtitle>Card Subtitle</CardSubtitle>
                    </CardHeader>
                    
                </Card>
                <p className='w-p-code'>
                    <span>w-block-link-status</span>
                </p>
              </div>

              {/* warning */}
              <div className="ui-item">
                <h6 className="strong">Vertical Block Link Warning </h6>
                <Card orientation="vertical" className="w-block-link-vertical w-block-link-status w-block-link-warning">
                    <div className="w-icon-wrapper">
                        <span className="k-icon k-font-icon k-i-star" role="presentation"></span>
                    </div>
                    <CardHeader>
                        <CardTitle>
                            <span class="k-icon k-font-icon k-i-star w-block-link-status-icon">
                            </span>
                            Card Title
                        </CardTitle>
                        <CardSubtitle>Card Subtitle</CardSubtitle>
                    </CardHeader>
                    
                </Card>
                <p className='w-p-code'>
                    <span>w-block-link-status</span>
                    <span>w-block-link-warning</span>
                </p>
              </div>

              {/* error */}
              <div className="ui-item">
                <h6 className="strong">Vertical Block Link Error </h6>
                <Card orientation="vertical" className="w-block-link-vertical w-block-link-status w-block-link-error">
                    <div className="w-icon-wrapper">
                        <span className="k-icon k-font-icon k-i-star" role="presentation"></span>
                    </div>
                    <CardHeader>
                        <CardTitle>
                            <span class="k-icon k-font-icon k-i-star w-block-link-status-icon">
                            </span>
                            Card Title
                        </CardTitle>
                        <CardSubtitle>Card Subtitle</CardSubtitle>
                    </CardHeader>
                    
                </Card>
                <p className='w-p-code'>
                    <span>w-block-link-status</span>
                    <span>w-block-link-error</span>
                </p>
              </div>

              {/* warning */}
              <div className="ui-item">
                <h6 className="strong">Vertical Block Link Success </h6>
                <Card orientation="vertical" className="w-block-link-vertical w-block-link-status w-block-link-success">
                    <div className="w-icon-wrapper">
                        <span className="k-icon k-font-icon k-i-star" role="presentation"></span>
                    </div>
                    <CardHeader>
                        <CardTitle>
                            <span class="k-icon k-font-icon k-i-star w-block-link-status-icon">
                            </span>
                            Card Title
                        </CardTitle>
                        <CardSubtitle>Card Subtitle</CardSubtitle>
                    </CardHeader>
                    
                </Card>
                <p className='w-p-code'>
                    <span>w-block-link-status</span>
                    <span>w-block-link-success</span>
                </p>
              </div>

              {/* UI Items */}
              <div className="ui-item">
                <h6 className="strong">Vertical Block Link Mini</h6>
                <Card orientation="vertical" className="w-block-link-vertical w-block-link-mini">
                    <div className="w-icon-wrapper">
                        <span className="k-icon k-font-icon k-i-star w-icon" role="presentation"></span>
                    </div>
                    <CardTitle className='w-block-link-mini-title'>Three Lines Max
                    </CardTitle>
                </Card>
                <p className="w-p-code">
                  <span>w-block-link-mini</span>
                </p>
              </div>

              {/* UI Items */}
              <div className="ui-item">
                <h6 className="strong">Horizontal Block Link</h6>
                <Card orientation="horizontal" className="w-block-link-horizontal">
                    <div className="w-icon-wrapper">
                        <span className="k-icon k-font-icon k-i-star w-icon" role="presentation"></span>
                    </div>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardSubtitle>Card Subtitle</CardSubtitle>
                    </CardHeader>
                    <div class="w-trailing-icon-wrapper">
                        <span class="k-icon k-font-icon k-i-gear" role="presentation">
                        </span>
                    </div>
                </Card>
                <p className="w-p-code">
                  <span>w-block-link-mini</span>
                </p>
              </div>
            </div>
        </section>
    </div>
    
  );
};

export default Custom;