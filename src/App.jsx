import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Blog from './pages/Blog'
// import { BrowserRouter } from 'react-router-dom'
function App({children}) {

  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Blog/>
    <ContactUs/>
    <Footer/>

{/* <BrowserRouter>
<Header/>
{children}
<Footer/>
</BrowserRouter> */}
    </>
  )
}

export default App
