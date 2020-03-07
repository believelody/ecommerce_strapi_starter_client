import React, { useState } from 'react'
import { Popover, Position, Menu, Text, Button } from 'evergreen-ui'
import { getSelectedLang, setSelectedLang } from '../../utils/lang.utils'

const FlagSelector = ({language}) => {
    switch (language) {
        case 0:
            return <Text>🇬🇧</Text>
        case 1:
            return <Text>🇫🇷</Text>
        case 2:
            return <Text>🇩🇪</Text>
        case 3:
            return <Text>🇮🇹</Text>
        case 4:
            return <Text>🇵🇹</Text>
        case 5:
            return <Text>🇪🇹</Text>
        case 6:
            return <Text>🇪🇸</Text>
    
        default:
            return null
    }
}

const LanguageMenu = () => {
    const [selected, setSelect] = useState(+getSelectedLang() || 1)

    const handleSelect = (index, cb) => {
        setSelect(index)
        setSelectedLang(index)
        if (cb) {
            cb()
        }
    }

    return (
        <Popover
            position={Position.BOTTOM_RIGHT}
            content={
                ({close}) => (
                    <Menu>
                        <Menu.Group title='languages'>
                            <Menu.Item icon={selected === 0 ? 'tick' : null} onSelect={() => handleSelect(0, close)}>
                                🇬🇧 <Text paddingLeft={16}>English</Text>
                            </Menu.Item>
                            <Menu.Item icon={selected === 1 ? 'tick' : null} onSelect={() => handleSelect(1, close)}>
                                🇫🇷 <Text paddingLeft={16}>French</Text>
                            </Menu.Item>
                            <Menu.Item icon={selected === 2 ? 'tick' : null} onSelect={() => handleSelect(2, close)}>
                                🇩🇪 <Text paddingLeft={16}>German</Text>
                            </Menu.Item>
                            <Menu.Item icon={selected === 3 ? 'tick' : null} onSelect={() => handleSelect(3, close)}>
                                🇮🇹 <Text paddingLeft={16}>Italian</Text>
                            </Menu.Item>
                            <Menu.Item icon={selected === 4 ? 'tick' : null} onSelect={() => handleSelect(4, close)}>
                                🇵🇹 <Text paddingLeft={16}>Portuguese</Text>
                            </Menu.Item>
                            <Menu.Item icon={selected === 5 ? 'tick' : null} onSelect={() => handleSelect(5, close)}>
                                🇪🇹 <Text paddingLeft={16}>Ethiopian</Text>
                            </Menu.Item>
                            <Menu.Item icon={selected === 6 ? 'tick' : null} onSelect={() => handleSelect(6, close)}>
                                🇪🇸 <Text paddingLeft={16}>Spain</Text>
                            </Menu.Item>
                        </Menu.Group>
                    </Menu>
                )
            }
        >
            <Button appearance='minimal' flex='none'>
                <FlagSelector language={selected} />
            </Button>
        </Popover>
    )
}

export default LanguageMenu
