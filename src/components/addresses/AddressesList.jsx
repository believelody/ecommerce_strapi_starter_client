import React from 'react'
import { UnorderedList, Text } from 'evergreen-ui'

const AddressesList = ({ addresses, isSelectable }) => {
    return (
        addresses.length > 0 ?
        <UnorderedList>
            
        </UnorderedList> :
        <Text>Empty list</Text>
    )
}

export default AddressesList
