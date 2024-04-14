import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);
  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>$ {product.price}</p>
        </div>
      ))}
    </div>
  );
}
