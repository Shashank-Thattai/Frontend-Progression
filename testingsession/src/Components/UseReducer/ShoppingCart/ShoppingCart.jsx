import React, { useReducer } from 'react'
import cartReducer, { initialState } from './cartReducer';
import ProductList from './ProductList';
import CartPanel from './CartPanel';

const ShoppingCart = () => {
    const[state,dispatch] = useReducer(cartReducer,initialState)
  return (
    <>
        <ProductList dispatch ={dispatch} initialState = {state}/>
        <CartPanel dispatch ={dispatch} initialState = {state} />
    </>
  )
}

export default ShoppingCart;