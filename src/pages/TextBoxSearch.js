import React from 'react';
import BackButton from '../components/BackButton'; // adjust path if needed
import DocumentationButton from '../components/DocumentationButton';
import { Button } from "@progress/kendo-react-buttons";
import { InputClearValue, InputSeparator, InputSuffix, TextBox } from '@progress/kendo-react-inputs';
import CodeViewer from '../components/CodeViewer';


const EMPTY_VALUE = "";

const TextBoxSearch = () => {
    const [value, setValue] = React.useState("Value");
    const handleChange = React.useCallback(event => {
        setValue(event.target.value);
    }, []);
    const handleClear = React.useCallback(() => {
        setValue(EMPTY_VALUE);
    }, []);
    return (
        <div className="page-wrapper">

            <div className='head-wrapper'>
                <div className="page-header">
                    <BackButton />
                    <h2>Search TextBox</h2>
                    <DocumentationButton rl="https://www.telerik.com/kendo-react-ui/components/inputs" />
                </div>
            </div>

            <section>
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
            </section>
            <section>
                <CodeViewer filePath="/kendo-ui-testing/code/SearchTextBox.js"  useLight={true} />

            </section>
        </div>
    )
}

export default TextBoxSearch;