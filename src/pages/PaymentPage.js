import React from 'react'
import Payment from '../components/Payment'
import CartNavbar from '../components/Navbar/CartNavbar'

import CheckStep from '../components/UI/CheckStep'

const PaymentPage = () => {
  return (
    <>
      <CartNavbar>
        <CheckStep
          bgc2="#222"
          after2=" "
          bgc3="#ccc"
          after3=" "
          width3="2rem"
          height3="2rem"
        />
      </CartNavbar>
      <Payment />
    </>
  )
}

export default PaymentPage
