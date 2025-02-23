import Navbar from './sections/navbar.jsx'
import Footer from './sections/footer.jsx'
import Home from './Pages/Home/home.jsx';
import Signup from './Pages/Signup/signup.jsx'
import About from './Pages/About/about.jsx'
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
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default App
