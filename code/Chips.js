import { ChipList, Chip } from '@progress/kendo-react-buttons';
const pirates = [
    {
        text: 'Cap’n Blackbeard’s Berry',
        value: 'blackbeard_berry',
       

    },
    {
        text: 'Peg-Leg Apple',
        value: 'pegleg_apple',
       
    },
    {
        text: 'Jolly Roger Strawberry',
        value: 'jollyroger_strawberry',
       
    },
    {
        text: 'Banana o’ the Booty',
        value: 'booty_banana',
       
    },
    {
        text: 'Kiwi Krakenbite',
        value: 'kraken_kiwi',

       

    }
];

const App = () => {
  return (
    <ChipList  
      selection="single" 
      defaultData={pirates} 
      chip={props => <Chip 
      removable={true} 
      size={'medium'}
      fillMode={'outline'}
      themeColor={'base'}
      {...props} />}
      />
  );
};

export default App;