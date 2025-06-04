import './Homepage.css';
import ProductCard from "../components/ProductCard";

const products = 
[
  { id: 1, name: "Camera", price: 499, description: "High-quality DSLR camera." },
  { id: 2, name: "Tripod", price: 199, description: "Stable and lightweight tripod." },
  { id: 3, name: "Lens", price: 299, description: "Zoom lens with image stabilization." }
];

const Homepage = () =>
{

    return(
        <div className="container">
        <div className='products-listing'>
            {products.map((product)=>
            (
                <ProductCard name={product.name} price={product.price}/>
            ))}
        </div>
        </div>
    )

}

export default Homepage