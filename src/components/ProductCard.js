import React from 'react';

const styles = 
{
  card: 
  {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  button: 
  {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

const ProductCard = ({ name, price }) => 
{
  return (
    <div style={styles.card}>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button style={styles.button}>Buy Now</button>
    </div>
  );
};

export default ProductCard