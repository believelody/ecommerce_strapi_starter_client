import React, { useState, useEffect } from 'react'
import { useAppHooks } from '../../context'
import api from '../../api'
import { Pane, Text, UnorderedList, Heading } from 'evergreen-ui'
import { SET_LOADING, RESET_LOADING } from '../../reducers/loadingReducer'
import ProductItem from '../products/ProductItem'

const CategoryDetail = ({ name }) => {
    const { useLoading } = useAppHooks()
    const [loadingState, dispatchLoading] = useLoading
    const [category, setCategory] = useState(null)

    const fetchCategory = async () => {
        try {
            const { data } = await api.category.getCategory(name)
            if (data.categories[0]) {
                setCategory(data.categories[0])
            }
        } catch (e) {
            console.log(e.message)
        }
        dispatchLoading({ type: RESET_LOADING })
    }

    useEffect(() => {
        dispatchLoading({ type: SET_LOADING, payload: { msg: 'Please wait' } })
        fetchCategory()
    }, [name])

    return (
        category &&
        <Pane width='100%'>
            <Pane borderBottom>
                <Heading marginBottom={8} width='100%' textAlign='center' size={700} color='white'>For {category.name}</Heading>
            </Pane>
            <UnorderedList
                listStyle='none'
                display='flex'
                flexWrap='wrap'
                justifyContent='space-around'
                marginX={16}
            >
                {
                    category.products.length > 0 && category.products.map(product => (
                        <ProductItem key={product._id} product={product} />
                    ))
                }
            </UnorderedList>
        </Pane>
    )
}

export default CategoryDetail
