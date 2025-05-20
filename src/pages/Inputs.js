import React from 'react';
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { Button } from "@progress/kendo-react-buttons";
import { InputClearValue, InputSeparator, InputSuffix, TextBox } from '@progress/kendo-react-inputs';


const EMPTY_VALUE = "";

const Inputs = () => {
    const pirates = [
        "Barnacle Beard John",
        "Emma ‘Sharkbait’ Johnson",
        "Cannonball Mike O’Rum",
        "Olivia the Kraken Whisperer",
        "One-Eyed Willie Miller",
        "Sophia ‘Scallywag’ Seafoam",
        "Black Powder James",
        "Isabella the Scurvy Siren",
        "Benjamin ‘Bootyhunter’ Martinez",
        "Mad-Eye Mia o’ the Mist",
        "Alexander Plankwalker White",
        "Charlotte ‘Cutlass’ Harris",
        "Deadeye Daniel the Deckhand",
        "Amelia ‘No-Tooth Nellie’ Thompson",
        "Matthew ‘Rum Runner’ Garcia",
    ];
    const [value, setValue] = React.useState("Value");
    const [selectedPirate, setPirateValue] = React.useState("");
    const onChange = (event) => {
        setPirateValue(event.value);
    };
    const handleChange = React.useCallback(event => {
        setValue(event.target.value);
    }, []);
    const handleClear = React.useCallback(() => {
        setValue(EMPTY_VALUE);
    }, []);
    return (
        <div className="page-wrapper">
            <div className='page-header'>
                <h2>Inputs</h2>
                <a href="https://www.telerik.com/kendo-react-ui/components/inputs" alt="Custom component documentation - KendoReact" target="_blank" rel="noreferrer">Inputs - KendoReact</a>
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
                        <h6 className="strong">TextBox</h6>
                        <TextBox
                            value={value}
                            onChange={handleChange}
                            placeholder="Search"
                            suffix={() => <>
                                {value !== EMPTY_VALUE &&
                                    <InputClearValue onClick={handleClear}>
                                        <span class="k-icon k-font-icon k-i-clear"></span>
                                    </InputClearValue>}
                                <InputSeparator />
                                <InputSuffix>
                                    <Button
                                        themeColor="primary"
                                        fillMode={'flat'}
                                        iconClass="k-icon k-font-icon k-i-star w-icon-search"
                                        type='button'
                                    />
                                </InputSuffix>
                            </>}
                        />
                        <p className='w-p-code'></p>
                    </div>

                    {/* UI Items */}
                    <div className="ui-item">
                        <h6 className="strong">MultiSelect</h6>
                        <MultiSelect
                            id="pirate"
                            data={pirates}
                            value={selectedPirate}
                            onChange={onChange}
                            placeholder="e.g. John Smith"
                            suffix={() => (
                                <InputSuffix orientation="horizontal">
                                    <Button
                                        themeColor="primary"
                                        fillMode={'flat'}
                                        iconClass="k-icon k-font-icon k-i-star w-icon-search w-icon-chevronDown"
                                    />
                                </InputSuffix>
                            )}
                        />
                        <p className='w-p-code'></p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Inputs;