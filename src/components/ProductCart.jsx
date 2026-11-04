export default function ProductCart({ cartItems, removeFromCart, hideCart }) {
    return (
        <div className="product-cart table-card">
            
            <i class="bi bi-cart">
                <span className="fs-lg">
                    Shopping Cart
                </span>
            </i>
            <button className="btn btn-sm close-button" onClick={()=> hideCart()}>
                <i class="bi bi-x"></i>
            </button>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item)=> (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button className="btn btn-sm" onClick={()=> removeFromCart(item.id)}>
                                          <i class="bi bi-trash3"></i>  
                                    </button>
                                </td>
                            </tr>

                        ))}
                    
                    </tbody>
                </table>
            )}
        </div>
    )
}