import BottomNavbar from '../components/Navbar/BottomNavbar'
import Hero from '../components/HeroPart'
import Category from '../components/category'
import Meal from '../components/Meal'
import Intro from '../components/Introduction'
import Feedback from '../components/Feedback'

import ToTopBtn from '../components/UI/NavBtn'
import Footer from '../components/UI/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Meal />
      <Intro />

      <Feedback />
      <ToTopBtn />
      <Footer />
      <BottomNavbar />
    </>
  )
}

export default Home
