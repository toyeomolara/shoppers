import React, { useContext } from "react";
import useGetProduct from "../hooks/useGetProduct";
import { CartContext } from "../contexts/cartContext";
import "./Shop.css";
import { Navbar } from "../../assets/navbar";
export const Shop = () => {
    const { product,setProduct } = useGetProduct()
    const { cart,setCart } = useContext(CartContext)
    const handleAddCart = (item) => {
        setCart((previous) => {
            // find out if the item is already in d cart, if in cart remove,if it's not in cart add it.
           const index = previous.findIndex((product)=>{ return item.id === product.id} )
           if(index < 0){
            setProduct((prev) =>{
                return {...prev,products:prev.products?.map((product)=>{ return {...product, inCart:true}})}
            })
            return [...previous, item]
            }else{

                setProduct((prev) =>{
                    return {...prev,products:prev.products?.map((product)=>{ return {...product, inCart:false}})}
                })

                return previous.filter((product)=>{ return product.id !== item.id })
            }
           
        })
    }

    return <Navbar> <div className="shop">
        <div className="shopTitle">
            <h1>SHOP</h1>
            <p>Number of items in Cart{ cart.length}</p>
        </div>
        <div className="Products">
            {product.products?.map((item) => {
                return <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <img src={item.thumbnail}></img>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    <button onClick={() => { handleAddCart(item) }} >{item.inCart ? "Remove from cart" :"Add to cart"} </button>
                </div>
            })}
        </div>
    </div>
        </Navbar>
}