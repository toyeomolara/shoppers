 import React from "react";
 import { Link } from "react-router-dom";
//  import { ShoppingCart } from "phosphor-react";
 import "./navbar.css";
 export const Navbar = ({children}) => {
 return (
    <>
   <div className="navbar">
     <div className="links">
            <Link to="/shop">Shop</Link>
             {/* <Link to="/cart"><ShoppingCart size={32}/></Link> */}
            <Link to="/cart">Cart</Link>
            <Link to ="/payment">Payment</Link>
      </div>
  </div>
        {children}  
    <div className="footer">
            &#169;
    </div></>

     )


 };
