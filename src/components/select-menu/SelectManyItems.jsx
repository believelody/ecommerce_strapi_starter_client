import React from 'react'
import { Pane, SelectMenu, Button } from 'evergreen-ui'

const SelectManyItems = ({ defaultText, resultText, selectedItems, setSelect, options, title }) => {
    const handleSelect = item => {
        setSelect(prevSelectedItems => [...prevSelectedItems, item])
    }

    const handleDeselect = item => {
        setSelect(prevSelectedItems => prevSelectedItems.filter(i => i.value !== item.value))
    }
    return (
        <Pane>
            <SelectMenu
                isMultiSelect
                title={title}
                options={options}
                selected={selectedItems.map(item => item.value)}
                onSelect={handleSelect}
                onDeselect={handleDeselect}
            >
                <Button>{selectedItems.length > 0 ? resultText : defaultText}</Button>
            </SelectMenu>
        </Pane>
    )
}

export default SelectManyItems
