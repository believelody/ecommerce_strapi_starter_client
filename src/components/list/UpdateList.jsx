import React from 'react'
import { UnorderedList, ListItem, Icon, Label, Pane, Button } from 'evergreen-ui'

const UpdateList = ({ list, handleEdit, handleDelete, title }) => {
    return (
        <Pane padding={8}>
            {
                title && <Label>{title}</Label>
            }
            <UnorderedList size={300}>
                {
                    list.length > 0 && list.map((item, index) => (
                        <ListItem key={item.value || index}>
                            {item.label}
                            <Button
                                appearance='minimal'
                                onClick={() => handleEdit(item.value || index)}
                                marginLeft={8}
                                height={24}
                                padding={4}
                            >
                                <Icon
                                    color='green'
                                    icon='edit'
                                />
                            </Button>
                            <Button
                                appearance='minimal'
                                onClick={() => handleDelete(item.value)}
                                marginLeft={8}
                                height={24}
                                padding={4}
                            >
                                <Icon
                                    color='red'
                                    icon='trash'
                                />
                            </Button>
                        </ListItem>
                    ))
                }
            </UnorderedList>
        </Pane>
    )
}

export default UpdateList
