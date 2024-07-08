import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div>
      <Header/>
      <main style={{height:'80vh'}}>{props.children}</main>
      <Footer/>
    </div>
  )
}
