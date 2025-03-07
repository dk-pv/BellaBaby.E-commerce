import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'



const Layout = ({children,cart=[]}) => {

  
  return (
    <div>
      <Navbar cartCount = {cart.length}/>
      <div  className='content'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
