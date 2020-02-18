import React from 'react'
import { Text, Pane } from 'evergreen-ui'
import Radio from '../radio/Radio'
import { objToText } from '../../utils/address.utils'

const AddressesList = ({ addresses, selectAddress, obj, type, defaultValue }) => {
    
    return (
        addresses.length > 0 ?
        <Pane padding={8}>
            <Radio
                options={
                    addresses.map((addr, i) => ({
                        label: objToText(addr),
                        value: i,
                        related: addr
                    }))
                }
                label="Choose your address"
                cb={selectAddress}
                type={type}
                obj={obj}
                defaultValue={defaultValue}
            />
        </Pane> :
        <Pane position='absolute' top='50%' left='50%' transform='translate3d(-50%, -50%, 0)' border>
            <Text>Empty list</Text>
        </Pane>
    )
}

export default AddressesList
