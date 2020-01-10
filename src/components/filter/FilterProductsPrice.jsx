import React, { useState } from 'react'
import SelectOneItem from '../select-menu/SelectOneItem'

const FilterProductsPrice = ({ options, title }) => {
    const [selectedItem, setSelect] = useState(options[0])

    return (
        <SelectOneItem
            defaultText='Select prices range...'
            resultText={selectedItem.label}
            title={title}
            options={options}
            selectedItem={selectedItem}
            setSelect={setSelect}
        />
    )
}

export default FilterProductsPrice
