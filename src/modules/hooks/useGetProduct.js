import { useEffect, useState } from "react"

const useGetProduct = () =>{
  const[product, setProduct] = useState({}) 
   
  useEffect( () =>{
    fetch('https://dummyjson.com/products')
    .then((res) => {
        return res.json()
    })
    .then((data) =>{
        console.log(data)
        setProduct(data)
    })
    .catch((error)=> {
        console.log(error)
    })

  } ,[])
  return {product, setProduct}
}
 export default useGetProduct