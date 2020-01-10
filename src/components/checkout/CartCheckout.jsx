import React from 'react'
import { Pane, Table } from 'evergreen-ui'
import Accordion from '../accordions/Accordion'
import Label from '../label/Label'
import { useAppHooks } from '../../context'
import InfoAlert from '../alerts/InfoAlert'

const CartCheckout = ({index, currentIndex, setIndex}) => {
  const { useCart } = useAppHooks()
  const [{cart}, dispatchCart] = useCart

  return (
    <Pane
      width='100%'
      height='100%'
      border
    >
      <Accordion
        index={index}
        currentIndex={currentIndex}
        setIndex={setIndex}
        header={<Label name='Your items' />}
        content={
          <Pane>
            <InfoAlert msg='Update your checkout products by modifying your cart 👍' />
            <Table>
              <Table.Head>
                <Table.TextHeaderCell
                  flexBasis={290}
                  flexShrink={0}
                  flexGrow={0}
                >
                  Item
              </Table.TextHeaderCell>
                <Table.TextHeaderCell>Qt</Table.TextHeaderCell>
                <Table.TextHeaderCell>Amount</Table.TextHeaderCell>
              </Table.Head>
              <Table.Body>
                {
                  cart.map((item, index) =>
                    <Table.Row height='96%' paddingY='2%' key={index}>
                      <Table.TextCell
                        flexBasis={290}
                        flexShrink={0}
                        flexGrow={0}
                      >
                        {`${item.product.name} - ${item.size.name} - ${item.color.name}`}
                      </Table.TextCell>
                      <Table.TextCell>{item.quantity}</Table.TextCell>
                      <Table.TextCell>$ {item.quantity * item.product.price}</Table.TextCell>
                    </Table.Row>
                  )
                }
              </Table.Body>
            </Table>
          </Pane>
        }
        scrollAuto
        predefinedHeight={500}
      />
    </Pane>
  )
}

export default CartCheckout
