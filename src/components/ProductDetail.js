import React, { useState } from 'react';

const products = [
  { id: 1, name: "Camera", price: 499, description: "High-quality DSLR camera" },
  { id: 2, name: "Tripod", price: 199, description: "Lightweight tripod" },
  { id: 3, name: "Lens", price: 299, description: "Zoom lens with image stabilization" }
];

const styles = {
  listItem: 
  {
    cursor: 'pointer',
    padding: '16px',
    border: '1px solid #ddd',
    marginBottom: '4px',
    borderRadius: '4px'
  },
  selectedDetails: 
  {
    marginTop: '20px',
    padding: '16px',
    border: '1px solid #4caf50',
    borderRadius: '8px',
    backgroundColor: '#f9fff9'
  }
};

const ProductDetail= () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2>Products</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map(product => (
          <li
            key={product.id}
            style={styles.listItem}
            onClick={() => setSelected(product)}
          >
            {product.name}
            
          </li>
        ))}
      </ul>

      {selected && (
        <div style={styles.selectedDetails}>
          <h3>{selected.name}</h3>
          <p>Price: ${selected.price}</p>
          <p>{selected.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail