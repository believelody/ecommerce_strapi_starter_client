import React from 'react'
import { Pane, SelectMenu, Button } from 'evergreen-ui'

const SelectOneItem = ({ selectedItem, title, options, setSelect, defaultText, resultText }) => {
    const handleSelect = item => {
        setSelect(item)
    }
    return (
        <Pane>
            <SelectMenu
                title={title}
                options={options}
                selected={selectedItem.value}
                onSelect={handleSelect}
            >
                <Button>{selectedItem ? resultText : defaultText}</Button>
            </SelectMenu>
        </Pane>
    )
}

export default SelectOneItem
