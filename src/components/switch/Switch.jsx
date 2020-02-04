import React from 'react'
import { Pane, Strong, Text, Switch as Sw } from 'evergreen-ui'

const Switch = ({ label, isStrong = false, handleChange, checked, marginBottom = 0, marginRight = 16 }) => {
    return (
        <Pane display={isStrong ? 'block' : 'flex'}>
            <Pane marginBottom={isStrong ? 8 : marginBottom} marginRight={isStrong ? 0 : marginRight}>
                {
                    isStrong ?
                        <Strong>{label}</Strong>
                        :
                        <Text>{label}</Text>
                }
            </Pane>
            <Sw
                checked={checked}
                onChange={handleChange}
            />
        </Pane>
    )
}

export default Switch
