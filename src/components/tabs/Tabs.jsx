import React, { useState, useEffect } from 'react'
import { Pane, Tablist, Tab } from 'evergreen-ui'

const Tabs = ({ elements, getCurrentIndexFromChild = null, marginTop = 10, updateIndex = -1 }) => {
    const [index, setIndex] = useState(0)

    const selectIndex = i => {
        if (getCurrentIndexFromChild) getCurrentIndexFromChild(i)
        setIndex(i)
    }

    useEffect(() => {
        if (updateIndex > -1) {
            setIndex(updateIndex)
        }
    }, [updateIndex])

    return (
        <Pane marginTop={marginTop} elevation={1}>
            <Pane borderBottom width='100%'>
                <Tablist paddingY={5} display='flex'>
                    {
                        elements.map(({tab, label}, i) => (
                            <Tab
                                key={i}
                                onSelect={() => selectIndex(i)}
                                isSelected={index === i}
                                aria-controls={`panel-${label}`}
                                id={label}
                                width={`${100/elements.length}%`}
                            >
                                {tab}
                            </Tab>
                        ))
                    }
                </Tablist>
            </Pane>
            {
                elements.map(({content, label}, i) => (
                    <Pane
                        key={i}
                        id={`panel-${label}`}
                        role="tabpanel"
                        aria-labelledby='home'
                        aria-hidden={index !== i}
                        display={index === i ? 'block' : 'none'}
                    >
                        {content}
                    </Pane>
                ))
            }
        </Pane>
    )
}

export default Tabs
