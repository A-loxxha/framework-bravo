export default function Card({ name, imageUrl, price, isAvailable, id, onAddToCart}) {
    return (
        <div className="col-4 mx-auto m-9">
            <div className="card h-100 fg-2">
                <img src={imageUrl} alt={name} className="card-img-top rounded" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Starting at ${price}</p>
                    {isAvailable ? (
                        <button onClick={(()=> onAddToCart(id))} className="btn btn-primary">Add to Cart</button>
                        ) : (
                        <button className="btn btn-secondary" disabled>Out of Stock</button>
                    )}
                </div>
                
            </div>  
        </div>
    )
}