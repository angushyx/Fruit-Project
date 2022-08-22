import React from 'react'
import Confirm from '../components/Confirm'
import { useDispatch } from 'react-redux'
import { changePageView } from '../slices/ShippingInfo-slice'
import CartNavbar from '../components/Navbar/CartNavbar'
import CheckStep from '../components/UI/CheckStep'

const ConfirmPage = () => {
  const dispatch = useDispatch()
  dispatch(changePageView(window.location.pathname))

  return (
    <>
      <CartNavbar>
        <CheckStep bgc3="#222" after3=" " />
      </CartNavbar>
      <Confirm />
    </>
  )
}

export default ConfirmPage
