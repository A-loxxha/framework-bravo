import Card from "./Card"
import { useContext } from "react"
import { ProductContext } from "../contexts/ProductContext";

export default function ProductList() {

    const { products, onAddToCart, toggleCart, deleteProduct } = useContext(ProductContext);

    return (
        <div className="row">
            {products.map((product) => (
                <Card
                    key={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    isAvailable={product.isAvailable}
                    id={product.id}
                    onAddToCart={onAddToCart}
                    toggleCart={toggleCart}
                    deleteProduct={deleteProduct}
                />
            ))}
        </div>
    )
}