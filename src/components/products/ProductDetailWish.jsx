import React, { useState } from 'react'
import { Pane, Icon, Pill, Heading, Small, Text } from 'evergreen-ui'
import { toaster } from 'evergreen-ui/commonjs/toaster'
import { useAppHooks } from '../../context'
import { OPEN_MODAL_CHILDREN } from '../../reducers/modalReducer'
import LoginForm from '../forms/LoginForm'

const ProductDetailWish = ({ product }) => {
    const { useAuth, useModal } = useAppHooks()
    const [{isConnected}, dispatchAuth] = useAuth
    const [modalState, dispatchModal] = useModal

    const [wish, setWish] = useState(false)
    const [nbWish, setNbWish] = useState(256)

    const handleClick = () => {
        if (isConnected) {
            setWish(!wish)
            setNbWish(prevNbWish => prevNbWish + 1)
            toaster.success(`You added successfully ${product.name} in your wishlist`)
        }
        else {
            dispatchModal({
                type: OPEN_MODAL_CHILDREN,
                payload: {
                    children: LoginForm,
                    title: (
                        <Pane textAlign='center'>
                            <Heading>Please login first and make your wish</Heading>
                            <Text><Small>You will manage very easily your wishlist </Small></Text>
                        </Pane>
                    )
                }
            })
        }
    }
    return (
        <Pane display='flex' alignItems='center' justifyContent='flex-end' width='50%'>
            <Pill color={wish ? 'red' : 'neutral'}>{nbWish}</Pill>
            <Icon 
                icon='pin' 
                size={26} 
                color={wish ? 'danger' : 'muted'} 
                marginLeft={8} 
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            />
        </Pane>
    )
}

export default ProductDetailWish
