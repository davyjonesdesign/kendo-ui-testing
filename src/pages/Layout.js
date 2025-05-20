import React from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

const Layout = () => {
    const [selected, setSelected] = React.useState(-1);
    const handleSelect = e => {
        setSelected(e.selected);
    };
    return (
        <div className="page-wrapper">
            <div className='page-header'>
                <h2>Layout</h2>
                <a href="https://docs.telerik.com/themebuilder/using-exported-styles/exported-package#using-the-custom-components-output" alt="Custom component documentation - KendoReact" target="_blank" rel="noreferrer">Custom component documentation - KendoReact</a> 
            </div>

            <section>
                <h3>TabStrip</h3>
                <p className="w-p-code">
                    <span>orientation="vertical"</span>
                    <span>w-block-link-vertical</span>
                </p>
                <div className="ui-container">
                
                    {/* UI Items */}
                    <div className="ui-item">
                        <h6 className="strong">Vertical Block Link</h6>
                        <TabStrip selected={selected} onSelect={handleSelect}>
                            <TabStripTab title="Tab 1 Title">
                                <p>Tab 1 Content</p>
                            </TabStripTab>
                            <TabStripTab title="Tab 2 Title">
                                <p>Tab 2 Content</p>
                            </TabStripTab>
                            <TabStripTab title="Tab 3 Title">
                                <p>Tab 3 Content</p>
                            </TabStripTab>
                        </TabStrip>
                        <p className='w-p-code'></p>
                    </div>
                </div>
                
            </section>
        </div>        
    );
};

export default Layout;
