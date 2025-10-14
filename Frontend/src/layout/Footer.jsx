import React from 'react'
import "../style/Layout.css";

export default function Footer() {
  return (
     <footer className='footer'>
       <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
     </footer>
  )
}
