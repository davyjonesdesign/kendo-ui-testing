import React from 'react';
import BackButton from '../components/BackButton';
import DocumentationButton from '../components/DocumentationButton';
import CodeViewer from '../components/CodeViewer';
import { ChipList, Chip } from '@progress/kendo-react-buttons';

const pirates = [
    {
        text: 'Cap’n Blackbeard’s Berry',
        value: 'blackbeard_berry'
    },
    {
        text: 'Peg-Leg Apple',
        value: 'pegleg_apple',
        size: 'medium',
        themeColor: 'base',
        fillMode: 'solid'
    },
    {
        text: 'Jolly Roger Strawberry',
        value: 'jollyroger_strawberry'
    },
    {
        text: 'Banana o’ the Booty',
        value: 'booty_banana'
    },
    {
        text: 'Kiwi Krakenbite',
        value: 'kraken_kiwi'
    }
];


const Chips = () => {

  return (
      <div className="page-wrapper">
        <div className='head-wrapper'>
          <div className="page-header">
            <BackButton />
            <h2>Chips</h2>
            <DocumentationButton rl="https://www.telerik.com/kendo-react-ui/components/buttons/chip" />
          </div>
        </div>


        <section>
            <ChipList selection="single" defaultData={pirates} chip={props => <Chip 
              removable={true} 
              size={'medium'}
              fillMode={'outline'}
              themeColor={'base'} 
              {...props} />} />
        </section>
        
        <section>
          <CodeViewer filePath="/kendo-ui-testing/code/Chips.js"  useLight={true} />
        </section>
          
      </div>
  );

};
export default Chips;