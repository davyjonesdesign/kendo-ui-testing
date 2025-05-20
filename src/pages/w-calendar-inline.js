import React from 'react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import BackButton from '../components/BackButton'; // adjust path if needed
import DocumentationButton from '../components/DocumentationButton';
import CodeViewer from '../components/CodeViewer';



const CalendarInline = () => {
  return (
      <div className="page-wrapper">
    
        <div className="page-header">
          <BackButton />
          <h2>w-calendar-inline</h2>
          <DocumentationButton rl="https://www.telerik.com/kendo-react-ui/components/buttons/" />
        </div>


        <MultiViewCalendar className='w-calendar-inline' views={1} />

        <h3>Source Code</h3>
        <CodeViewer filePath="/code/w-calendar-inline.js"  useLight={true} />
      </div>
  );
};

export default CalendarInline;
