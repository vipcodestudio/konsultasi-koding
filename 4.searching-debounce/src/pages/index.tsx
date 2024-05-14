import styles from '@/styles/Home.module.css';
import { Product } from '@/type/product.type';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState<any>([]);
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<any>([]);

  useEffect(() => {
    fetch('/api/product')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  useEffect(() => {
    if (search !== '') {
      const result = products.filter((product: Product) => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });
      setSearchResult(result);
    } else {
      setSearchResult(products);
    }
  }, [products, search]);

  return (
    <>
      <main className={`${styles.main}`}>
        <label htmlFor="">
          Search
          <input
            type="text"
            style={{ marginLeft: '10px' }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th style={{ padding: '10px' }}>Name</th>
              <th style={{ padding: '10px' }}>Price</th>
              <th style={{ padding: '10px' }}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {searchResult.map((product: Product) => (
              <tr key={product.id}>
                <td style={{ padding: '10px' }}>{product.name}</td>
                <td style={{ padding: '10px' }}>{product.price}</td>
                <td style={{ padding: '10px' }}>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
