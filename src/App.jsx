import { Navbar } from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Product from './sections/Product'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Pricing from './sections/Pricing'
import { LangProvider } from './lang/LangContext'

const App = () => {
  return (
    <LangProvider>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Product />
        <Pricing />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  )
}

export default App
