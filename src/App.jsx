import { Navbar } from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Product from './sections/Product'  
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App