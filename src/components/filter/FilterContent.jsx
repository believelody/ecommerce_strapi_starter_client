import React from 'react'
import { Pane, Button, Text } from 'evergreen-ui'
import FilterProductsTag from './FilterProductsTag'
import FilterProductsPrice from './FilterProductsPrice'
import FilterProductsColor from './FilterProductsColor'

const TAGS = ['woman', 'legging', 'fitness', 'workout', 'anti-cellulite']
const PRICES = ['1€ to 20€', '21€ to 40€', '41€ to 60€', '61€ to 80€', '81€ to 100€']
const COLORS = ['red', 'blue', 'green', 'black', 'grey', 'yellow', 'purple']

const transformArray = array => array.map(label => ({label, value: label}))

const FilterContent = ({ tags }) => {
    return (
        <Pane
            width='100%'
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection='column'
            padding={8}
        >
            <Pane
                width='100%'
                display='flex'
                flexWrap='wrap'
                justifyContent="space-around"
                marginBottom={24}
            >
                <FilterProductsTag options={transformArray(TAGS)} title='Choose tags' />
                <FilterProductsPrice options={transformArray(PRICES)} title='Choose a prices range' />
                <FilterProductsColor options={transformArray(COLORS)} title='Choose tags' />
            </Pane>
            <Button appearance="primary" width={120} display="flex" justifyContent="center">
                <Text color='white'>Validate</Text>
            </Button>
        </Pane>
    )
}

export default FilterContent
