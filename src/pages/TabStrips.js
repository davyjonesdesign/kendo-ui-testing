import React from 'react';
import BackButton from '../components/BackButton'; // adjust path if needed
import DocumentationButton from '../components/DocumentationButton';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';

const TabStrips = () => {
    const [selected, setSelected] = React.useState(-1);
    const handleSelect = e => {
        setSelected(e.selected);
    };
    return (
        <div className="page-wrapper">
            
            
            <div className="page-header">
                <BackButton />
                <h2>TabStrip</h2>
                <DocumentationButton rl="https://www.telerik.com/kendo-react-ui/components/layout/tabstrip" />
            </div>
            <section>
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
            </section>
        </div>        
    );
};

export default TabStrips;
