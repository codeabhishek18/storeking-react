import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: "Camera", price: 499 },
  { id: 2, name: "Tripod", price: 199 },
  { id: 3, name: "Lens", price: 299 }
];

const styles = {
  container: 
  {
    width:'100%',
    margin: '40px auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f5f5f5',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  heading: 
  {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  productList: 
  {
    paddingLeft: 0,
    listStyle: 'none',
    marginBottom: '30px'
  },
  productItem: 
  {
    backgroundColor: '#fff',
    marginBottom: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: 
  {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: 
  {
    backgroundColor: '#45a049'
  },
  cartContainer: 
  {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  cartItem: 
  {
    borderBottom: '1px solid #eee',
    padding: '10px 0',
    fontWeight: '500',
    color: '#555'
  },
  total: 
  {
    marginTop: '20px',
    fontWeight: '700',
    fontSize: '1.2rem',
    textAlign: 'right',
    color: '#222'
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
    marginTop: '10px'
  }
};

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    console.log("Cart changed:", cart);
  }, [cart]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Products</h2>
      <ul style={styles.productList}>
        {products.map(prod => (
          <li key={prod.id} style={styles.productItem}>
            <span>{prod.name} - ${prod.price}</span>
            <button
              style={styles.button}
              onClick={() => addToCart(prod)}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#45a049')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#4CAF50')}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <div style={styles.cartContainer}>
        <h2 style={styles.heading}>Cart Items</h2>
        {cart.length === 0 ? (
          <p style={styles.emptyMessage}>No items in cart.</p>
        ) : (
          <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <div style={styles.total}>Total: ${total}</div>
      </div>
    </div>
  );
};

export default Cart;
