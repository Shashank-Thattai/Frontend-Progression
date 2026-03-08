import React from 'react'
import { Route, Router, Routes, Link, useNavigate} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Careers from './Components/Careers';
import ProductDetails from './Components/ProductDetails';
import SingleProductDetails from './Components/SingleProductDetails';
import Contant1 from './Components/SubComponents/Contact1';
import Contact2 from './Components/SubComponents/Contact2';
import Contact3 from './Components/SubComponents/Contact3';
import Contact1 from './Components/SubComponents/Contact1';


const MainBlock = () => {
  var navigate = useNavigate();

  function handleCareerClick(){
    navigate('/careers')

  }
  return (
    <>
    <main>
        <div className='mainContainer'>
            <div className='LeftBlock'>Left</div>
            <nav>
               <ul>
                <li><Link to="/"> 
                  Home
                  </Link></li>
                <li>
                  <Link to="/productDetails"> 
                  Product details
                  </Link>
                 
                  </li>
                <li> 
                  <div onClick={handleCareerClick}>Career</div></li>
                <li><Link to="/contact"> 
                  contact
                  </Link></li></ul> 
            </nav>
            <div className='RightBlock'>Right</div>
                <div className='container'>
                  <Routes>
                    <Route path ="/" element={<Home/>}></Route>
                    <Route path ="/contact" element={<Contact/>}>
                    <Route path='/contact/contact1' element={<Contact1/>}></Route>
                    <Route path='/contact/contact2' element={<Contact2/>}></Route>
                    <Route path='/contact/contact3' element={<Contact3/>}></Route>
                    
                    </Route>
                    <Route path ="/productDetails" element={<ProductDetails/>}></Route>
                    <Route path ="/careers" element={<Careers/>}>

                    
                    </Route>
                    <Route path="/pDetails/:productId/:ratingCount" element ={<SingleProductDetails/>}></Route>
                  </Routes>
                </div>
        </div>
      
    </main>
    </>
    
  )
}

export default MainBlock;