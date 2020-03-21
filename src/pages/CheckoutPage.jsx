import React, { useEffect, useState } from 'react'
import { Pane, Card } from 'evergreen-ui'
import { Elements, StripeProvider } from 'react-stripe-elements';
import { useAppHooks } from '../context';
import { Redirect } from 'react-router-dom';
import EntrustPayment from '../components/entrust/EntrustPayment';
import EntrustShipping from '../components/entrust/EntrustShipping';
import PaymentSucceedCard from '../components/payment/PaymentSucceedCard';
import CheckoutCard from '../components/checkout/CheckoutCard';
import { RESET_CART } from '../reducers/cartReducer';
import { deleteCart } from '../utils/cart.utils';
import { OPEN_MODAL_CHILDREN } from '../reducers/modalReducer';
import Page from '../components/page/Page';

const bg = `radial-gradient(circle at 69% 75%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 38%,transparent 38%, transparent 69%,transparent 69%, transparent 100%),radial-gradient(circle at 41% 58%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 3%,transparent 3%, transparent 75%,transparent 75%, transparent 100%),radial-gradient(circle at 94% 91%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 48%,transparent 48%, transparent 55%,transparent 55%, transparent 100%),radial-gradient(circle at 68% 38%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 34%,transparent 34%, transparent 36%,transparent 36%, transparent 100%),radial-gradient(circle at 81% 20%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 40%,transparent 40%, transparent 61%,transparent 61%, transparent 100%),radial-gradient(circle at 46% 37%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 37%,transparent 37%, transparent 76%,transparent 76%, transparent 100%),radial-gradient(circle at 49% 5%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 43%,transparent 43%, transparent 67%,transparent 67%, transparent 100%),radial-gradient(circle at 18% 58%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 4%,transparent 4%, transparent 20%,transparent 20%, transparent 100%),radial-gradient(circle at 43% 68%, hsla(65,0%,95%,0.05) 0%, hsla(65,0%,95%,0.05) 10%,transparent 10%, transparent 36%,transparent 36%, transparent 100%),linear-gradient(135deg, rgb(85, 133, 238),rgb(177, 145, 214))`


const CheckoutPage = () => {
  const  { useCart, useCheckout, useModal } = useAppHooks()
  const [cartState, dispatchCart] = useCart
  const [{isPaymentSucceed}, dispatchCheckout] = useCheckout
  const [modalState, dispatchModal] = useModal

  const [isRedirecting, setRedirecting] = useState(false)

  useEffect(() => {
    if (isPaymentSucceed) {
      dispatchModal({
        type: OPEN_MODAL_CHILDREN,
        payload: {
          children: PaymentSucceedCard,
          noClose: true
        }
      })
      setTimeout(() => {
        deleteCart()
        setRedirecting(true)
        dispatchCart({ type: RESET_CART })
      }, 5000);
    }
  }, [isPaymentSucceed])

  return (
    !isRedirecting > 0 ?
    <StripeProvider apiKey={process.env.STRIPE_PUBLIC_KEY}>
      <Elements>
        <Page
          bg={bg}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Card background='tint1'>
            <CheckoutCard />
          </Card>
          <Pane
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='space-evenly'
          >
            <EntrustPayment />
            <EntrustShipping />
          </Pane>
        </Page>
      </Elements>
    </StripeProvider>
    :
    <Redirect to='/' />
  )
}

export default CheckoutPage
