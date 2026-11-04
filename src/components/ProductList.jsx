import Card from "./Card"

export default function ProductList({ products, onAddToCart, toggleCart }) {
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
                />
            ))}
        </div>
    )
}