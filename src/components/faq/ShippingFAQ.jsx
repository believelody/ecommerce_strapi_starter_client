import React from 'react'
import { Pane, Strong, UnorderedList, ListItem, Icon } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'

const ShippingFAQ = ({ setIndex, currentIndex }) => {
    return (
        <Pane borderBottom>
            <Accordion
                index={0}
                setIndex={setIndex}
                currentIndex={currentIndex}
                header={
                    ({ handleClick }) => (
                        <Pane textAlign='center' onClick={handleClick} cursor='pointer'>
                            {currentIndex === 0 && <Icon icon='caret-right' />}
                            <Strong size={currentIndex === 0 ? 600 : 500}>Shippping And Returns</Strong>
                            {currentIndex === 0 && <Icon icon='caret-left' />}
                        </Pane>
                    )
                }
                content={
                    <Pane paddingX={4}>
                        <UnorderedList>
                            <ListItem icon='chevron-right'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Veritatis distinctio velit nesciunt officiis itaque, nisi, fuga molestiae reiciendis at laborum doloremque dolores quibusdam labore maxime repellendus expedita amet molestias exercitationem dignissimos perferendis.
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Atque hic assumenda! Id non sint reprehenderit esse quas eius perferendis, tempora libero praesentium quam maiores reiciendis eveniet sed unde error atque doloribus voluptates numquam vero soluta accusantium totam hic provident cum? Incidunt, assumenda.
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Dolore eius omnis dicta, sint, odit dolores distinctio deserunt necessitatibus, sed nostrum sit expedita? Explicabo laudantium iure mollitia.
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Quaerat laudantium ipsam reprehenderit harum.
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Aspernatur esse repellat commodi id quibusdam! Sapiente adipisci, eveniet tempora amet dolor magnam rerum a ex cupiditate delectus praesentium, ducimus eius deleniti officiis?
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Eaque tempora et vitae quaerat porro doloribus animi dolores, aspernatur dolorum id maiores assumenda adipisci illum deleniti possimus quidem voluptates, rerum quis eos corporis odit.
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Animi nisi maiores nobis eius molestiae, praesentium quibusdam esse voluptates incidunt ut, corporis fugiat error similique?
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Ab ex quas aliquam explicabo temporibus, tenetur, vel dicta, similique assumenda inventore repellat consequuntur magnam in optio.
                            </ListItem>
                            <ListItem icon='chevron-right'>
                                Fugiat praesentium nisi impedit possimus doloremque, odio ex tenetur natus provident esse quibusdam labore cum minus. Laborum ratione optio consectetur ad nisi qui soluta distinctio sapiente quae, minus in quas?
                            </ListItem>
                        </UnorderedList>
                    </Pane>                    
                }
            />
        </Pane>
    )
}

export default ShippingFAQ
