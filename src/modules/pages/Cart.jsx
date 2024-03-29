import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { Navbar } from "../../assets/navbar";
export const Cart = () => {
    const{cart} = useContext(CartContext)
    const Items = cart.map((item)=>{
        return <div key={item.id}>
            <img src={item.thumbnail}></img>
            <p>{item.title}</p>
            <p>{item.price}</p>
        </div>
    })  
    return <Navbar>
        <div>{Items}</div>
    </Navbar>
    
}
