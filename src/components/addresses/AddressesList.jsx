import React from 'react'
import { Text, Pane } from 'evergreen-ui'
import Radio from '../radio/Radio'

const AddressesList = ({ addresses, dispatchCheckout, obj, type }) => {
    return (
        addresses.length > 0 ?
        <Pane padding={8}>
            <Radio
                options={
                    addresses.map((address, i) => ({
                        label: `
                            ${address.address1 || ''}
                            ${address.address2 || ''}
                            ${address.zip || ''}
                            ${address.city || ''}
                        `,
                        value: `address-${i}`,
                        related: address
                    }))
                }
                label="Choose your address"
                methodFromParent={dispatchCheckout}
                type={type}
                obj={obj}
            />
        </Pane> :
        <Text>Empty list</Text>
    )
}

export default AddressesList
