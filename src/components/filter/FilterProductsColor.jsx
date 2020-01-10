import React, { useState } from 'react'
import SelectManyItems from '../select-menu/SelectManyItems'

const FilterProductsColor = ({ options, title }) => {
    const [selectedItems, setSelect] = useState([])

    return (
        <SelectManyItems
            defaultText='Select colors...'
            resultText={`${selectedItems.length} colors selected`}
            selectedItems={selectedItems}
            setSelect={setSelect}
            options={options}
            title={title}
        />
    )
}

export default FilterProductsColor
