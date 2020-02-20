import React from 'react'
import { UnorderedList, ListItem, Icon, Label, Pane, Button, IconButton } from 'evergreen-ui'

const UpdateList = ({ list, handleEdit, handleDelete, title, selected = -1 }) => {
    return (
        <Pane padding={8}>
            {
                title && <Label>{title}</Label>
            }
            <UnorderedList size={300}>
                {
                    list.length > 0 && list.map((item, index) => (
                        <ListItem 
                            key={item.value || index} 
                            display='flex' 
                            justifyContent='flex-start'
                            alignItems='flex-start'
                            icon={index === selected ? 'home' : ''} 
                            iconColor='info'
                        >
                            {item.label}
                            <IconButton
                                appearance='minimal'
                                intent='success'
                                icon='edit'
                                onClick={() => handleEdit(item.value || index)}
                                marginLeft={8}
                                height={24}
                                padding={4}
                            />
                            <IconButton
                                appearance='minimal'
                                intent='danger'
                                icon='trash'
                                onClick={() => handleDelete(item.value)}
                                marginLeft={8}
                                height={24}
                                padding={4}
                            />
                        </ListItem>
                    ))
                }
            </UnorderedList>
        </Pane>
    )
}

export default UpdateList
