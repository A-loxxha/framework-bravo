import Card from "./Card"

export default function ProductList({ products }) {
    return (
        <div className="row">
            {products.map((product) => (
                <Card
                    key={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    isAvailable={product.isAvailable}
                />
            ))}
        </div>
    )
}