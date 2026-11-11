import { useState} from "react"
import { useEffect } from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import Buttons from "./Buttons"
import SideBar from "./components/SideBar"
import ProductCart from "./components/ProductCart"
import { ProductContext } from "./contexts/ProductContext";


export default function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const [nameInput, setNameInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [imageInput, setImageInput] = useState("");

  useEffect(() => {fetch("http://localhost:4000/products")
    .then((response) => response.json())
    .then((data) => setProducts(data));},
    []);


  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!nameInput || !priceInput) {
      alert("Please provide at least a Product Name and Price!");
      return;
    }

    const brandNewProduct = {
      id: Date.now(),
      name: nameInput,
      price: parseFloat(priceInput),
      imageUrl: imageInput || "https://unsplash.com",
      isAvailable: true
    };

    setProducts([...products, brandNewProduct]);
    setNameInput("");
    setPriceInput("");
    setImageInput("");
  };

  function addtoCart(id) {
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd) {
      setCartItems([...cartItems, productToAdd]);
      setIsCartOpen(true);
    }
  }

  function removeFromCart(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  return (
    <ProductContext.Provider value={{ products, addtoCart }}>
      <NavBar onToggleAdmin={() => setIsAdminOpen(!isAdminOpen)} />
      
      {!isCartOpen && <SideBar />}
      
      <main className={`container ${isCartOpen ? "cartopen" : ""}`}>
        
        {isAdminOpen && (
          <div className="bg-white p-4 border rounded shadow-sm" style={{ marginTop: '100px', marginBottom: '20px' }}>
            <h3 className="mb-3 text-dark fw-bold">Add New Laptop Model</h3>
            <form onSubmit={handleCreateProduct} className="row g-3">
              <div className="col-12 col-md-4">
                <label className="form-label fw-semibold text-muted">Laptop Model Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="e.g. Framework Laptop 13 Pro Max" 
                  value={nameInput} 
                  onChange={(e) => setNameInput(e.target.value)} 
                />
              </div>
              <div className="col-12 col-md-3">
                <label className="form-label fw-semibold text-muted">Price ($ USD)</label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="e.g. 999" 
                  value={priceInput} 
                  onChange={(e) => setPriceInput(e.target.value)} 
                />
              </div>
              <div className="col-12 col-md-3">
                <label className="form-label fw-semibold text-muted">Image URL (Optional)</label>
                <input 
                  type="url" 
                  className="form-control" 
                  placeholder="Paste direct link..." 
                  value={imageInput} 
                  onChange={(e) => setImageInput(e.target.value)} 
                />
              </div>
              <div className="col-12 col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-dark w-100 fw-bold py-2">Add Model</button>
              </div>
            </form>
          </div>
        )}

        {!isAdminOpen && <div style={{ height: '100px' }}></div>}

        <div className="container-fluid button-container d-flex justify-content-start flex-wrap gap-2 m-0 p-0 mb-4">
          <Buttons>What's New</Buttons>
          <Buttons>Best Sellers</Buttons>
          <Buttons>Bundles</Buttons>
          <Buttons>Intel</Buttons>
          <Buttons>AMD</Buttons>
          <Buttons>Pre-order now</Buttons>
        </div>
        
        <h1 className="mb-4">Framework Laptops</h1>
        <ProductList />
      </main>
      
      {isCartOpen && (
        <ProductCart cartItems={cartItems} removeFromCart={removeFromCart} hideCart={() => setIsCartOpen(false)} />
      )}
      
      <div className={isCartOpen ? "footer-cartopen" : "footer"}>
        <Footer year={new Date().getFullYear()} />
      </div>
    </ProductContext.Provider>
  );
}
