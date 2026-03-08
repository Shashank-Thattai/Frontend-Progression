import React from 'react'
import { Route,Link, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    contact
    <div>
     <Link to ='/contact/contact1'>
     <div>Company Contact</div>
     </Link>
        
        <Link to ='/contact/contact2'>
     <div>Main Branch Contact</div>
     </Link>
     <Link to ='/contact/contact3'>
     <div>Employee Contact</div>
     </Link>
         <div>
            <Outlet/> {/* This outlet is showing where the sub routing should be rendered*/}
         </div>

    </div>
    
    </>
  )
}

export default Contact;