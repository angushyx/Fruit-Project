import React from 'react'
import ShippingForm from '../components/ShippingForm'
import CheckStep from '../components/UI/CheckStep'
import { changePageView } from '../slices/ShippingInfo-slice'
import CartNavbar from '../components/Navbar/CartNavbar'
import Footer from '../components/UI/Footer'
import { useDispatch } from 'react-redux'
import {
  Container,
  Headline,
} from '../components/ShippingForm/ShippingFormElement'

const CheckoutPage = () => {
  const dispatch = useDispatch()
  dispatch(changePageView(window.location.pathname))

  return (
    <>
      {' '}
      <CartNavbar>
        <CheckStep
          bgc1="#222"
          after1=" "
          bgc2="#ccc"
          after2=" "
          bgc3="#ccc"
          after3=" "
          width2="1.5rem"
          height2="1.5rem"
          width3="1.5rem"
          height3="1.5rem"
        />
      </CartNavbar>
      <Container>
        <Headline>Check you address</Headline>
        <ShippingForm />
      </Container>
      <Footer />
    </>
  )
}

export default CheckoutPage
