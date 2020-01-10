import React, { useState } from 'react'
import SelectManyItems from '../select-menu/SelectManyItems'

const FilterProductsTag = ({ options, title}) => {
    const [selectedItems, setSelect] = useState([])

    return (
        <SelectManyItems
            defaultText='Select tags...'
            resultText={`${selectedItems.length} tags selected`}
            selectedItems={selectedItems}
            setSelect={setSelect}
            options={options}
            title={title}
        />
    )
}

export default FilterProductsTag
