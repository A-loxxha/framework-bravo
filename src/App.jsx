import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import Buttons from "./Buttons"
import SideBar from "./components/SideBar"
import { useState } from "react"
import "./App.css"
import ProductCart from "./components/ProductCart"

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Framework Laptop 12 (Intel Core Series 3)",
      imageUrl: "https://static.frame.work/vnhapdfuirbckad88ctfkwlb0hjg",
      price: 699,
      isAvailable: true
    },
    {
      id: 2,
      name: "Framework Laptop 12 DIY Edition (Intel Core Series 3)",
      imageUrl: "https://static.frame.work/dmgr8ou5tmk5podprsmlm0wlq9vw",
      price: 549,
      isAvailable: true
    },
    {
      id: 3,
      name: "Framework Laptop 13 Pro DIY Edition (AMD AI 300 Series)",
      imageUrl: "https://static.frame.work/u2h7dlre8cgys5k97odeo4gqjd0v",
      price: 1399,
      isAvailable: false
    },
    {
      id: 4,
      name: "Framework Laptop 13 Pro DIY Edition (Intel Core Ulta Series 3)",
      imageUrl: "https://static.frame.work/p4pbvfiu128s84oplq2jjhtf7n0i",
      price: 1199,
      isAvailable: true
    },
    {
      id: 5,
      name: "Framework Laptop 13 Pro (AMD Ryzen AI 300 Series)",
      imageUrl: "https://static.frame.work/vhz9cwchzrgaz4le82wlqv6ca87a",
      price: 2299,
      isAvailable: false
    },
    {
      id: 6,
      name: "Framework Laptop 13 Pro (Intel Core Ultra Series 3)",
      imageUrl: "https://static.frame.work/vhz9cwchzrgaz4le82wlqv6ca87a",
      price: 1599,
      isAvailable: true
    },
    {
      id: 7,
      name: "Framework Laptop 16(AMD Ryzen AI 300 Series)",
      imageUrl: "https://static.frame.work/v1d1q33fcehes9p3ujfj6atumc75",
      price: 1839,
      isAvailable: true
    },
    {
      id: 8,
      name: "Framework Laptop 16 DIY Edition (AMD Ryzen AI 300 Series)",
      imageUrl: "https://static.frame.work/3psgzvjutbwbps4z4if4skfqfw3r",
      price: 1249,
      isAvailable: false
    },
    {
      id: 9,
      name: "Framework Laptop 12 DIY Edition (13th Gen Intel Core)",
      imageUrl: "https://static.frame.work/3tn9i090bln2ml3aowtzoj381jy5",
      price: 499,
      isAvailable: true
    },
    {
      id: 10,
      name: "Framework Laptop 13 DIY Edition (AMD Ryzen AI 300 Series)",
      imageUrl: "https://static.frame.work/5k5bmp0edunqm861pn6sidt7tbwo",
      price: 849,
      isAvailable: false
    },
    {
      id: 11,
      name: "Framework Laptop 13 (AMD Ryzen AI 300 Series)",
      imageUrl: "https://static.frame.work/7lprh50scjvsorxyv03i6yg5cbc2",
      price: 1049,
      isAvailable: true
    },
    {
      id: 12,
      name: "Framework Laptop 12 (13th Gen Intel Core)",
      imageUrl: "https://static.frame.work/1rruqwgwxrszmoq1d7ghoai6iid4",
      price: 699,
      isAvailable: true
    },
  ])

  const [cartItems, setCartItems] = useState([])

  function addtoCart(id) {
    const productToAdd = products.find((product)=> product.id === id)
    setCartItems ([...cartItems, productToAdd])
    displayCart()
  
  }

  

  function removeFromCart(id) {
    const remainingCartItems = cartItems.filter((item)=> item.id !== id)
    setCartItems(remainingCartItems)
  }
  
  const [isCartOpen, setIsCartOpen] = useState()

  function displayCart() {
    setIsCartOpen(true)
  }

  function hideCart() {
    setIsCartOpen(false)
  }

  return (
    <>
      <NavBar/>
      {!isCartOpen && <SideBar/>}
      {!isCartOpen ?
      <main className="container">
        <div className="container-fluid button-container d-flex justify-content-flex-start flex-wrap ">
        <Buttons>What's New</Buttons>
        <Buttons>Best Sellers</Buttons>
        <Buttons>Bundles</Buttons>
        <Buttons>Intel</Buttons>
        <Buttons>AMD</Buttons>
        <Buttons>Pre-order now</Buttons>
      </div>
        <h1 className="m-9">Framework Laptops</h1>
        <ProductList products={products} onAddToCart={addtoCart}/>
           
      </main> : 
        <main className="container cartopen">
        <div className="container-fluid button-container d-flex justify-content-flex-start flex-wrap ">
        <Buttons>What's New</Buttons>
        <Buttons>Best Sellers</Buttons>
        <Buttons>Bundles</Buttons>
        <Buttons>Intel</Buttons>
        <Buttons>AMD</Buttons>
        <Buttons>Pre-order now</Buttons>
      </div>
        <h1 className="m-9">Framework Laptops</h1>
        <ProductList products={products} onAddToCart={addtoCart}/>
           
      </main>}
      
      
      {isCartOpen && <ProductCart cartItems={cartItems} removeFromCart={removeFromCart} hideCart={hideCart}/>}
      
      {!isCartOpen && <Footer year={new Date().getFullYear()}/>}
      
      

    </>
    
  )
}