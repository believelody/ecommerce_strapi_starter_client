import React, { useState } from 'react'
import { Pane, Text, Button } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import AddressesList from './AddressesList'

const AddressContent = ({ addresses, addressForm, label, obj, type }) => {
    const [currentIndex, setIndex] = useState(-1)

    return (
        <Pane
            width='100%'
            display="block"
            padding={8}
        >
            <Pane border>
                <Accordion
                    index={0}
                    currentIndex={currentIndex}
                    setIndex={setIndex}
                    header={
                        <Text display='flex' justifyContent='center'>
                            Your {label} Address List
                        </Text>
                    }
                    content={
                        <AddressesList
                            addresses={addresses}
                            type={type}
                            obj={obj}
                            dispatchCheckout={
                                (options, value, type, obj) => dispatchCheckout({
                                    type,
                                    payload: {
                                        [obj]: options.find(option => option.value === value)
                                    }
                                })
                            }
                        />
                    }
                />
            </Pane>
            <Pane>
                <Accordion
                    index={1}
                    currentIndex={currentIndex}
                    setIndex={setIndex}
                    header={
                        <Pane display='flex' justifyContent='flex-end'>
                            <Button appearance="minimal" height={24} iconBefore="plus">
                                Add a new address
                            </Button>
                        </Pane>
                    }
                    content={addressForm}
                />
            </Pane>
        </Pane>
    )
}

export default AddressContent
