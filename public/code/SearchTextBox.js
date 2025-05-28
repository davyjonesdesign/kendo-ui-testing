import React from 'react';
import { Button } from "@progress/kendo-react-buttons";
import { InputClearValue, InputSeparator, InputSuffix, TextBox } from '@progress/kendo-react-inputs';


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
    )
}

export default TextBoxSearch;