import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext({});
export const CartProvider = ({children}) => {
    const[cart,setCart]= useState([])
   return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
}
<CartProvider>
    
</CartProvider>