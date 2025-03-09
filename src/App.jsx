import Navbar from './sections/navbar.jsx'
import Footer from './sections/footer.jsx'
import Home from './Pages/Home/home.jsx';
import Signup from './Pages/Signup/signup.jsx'
import About from './Pages/About/about.jsx'
import Products from './Pages/Products/Products.jsx'
import Pricing from './Pages/Price/price.jsx'
import Support from './Pages/Support/support.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Product' element={<Products/>}/>
            <Route path='/Pricing' element={<Pricing/>}/>
            <Route path='/Support' element={<Support/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
