import useDebounce from '@/hooks/useDebounce';
import styles from '@/styles/Home.module.css';
import { Product } from '@/type/product.type';
import { useEffect, useState } from 'react';

const DELAY = 1000;

export default function Search() {
  const { debounce } = useDebounce();
  const [products, setProducts] = useState<any>([]);
  const [search, setSearch] = useState<string>('');

  const getDataProduct = (url: string) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      });
  };

  const performSearch = () => {
    if (search !== '') {
      getDataProduct(`/api/product?search=${search}`);
    } else {
      getDataProduct('/api/product');
    }
  };

  const dobouncedSearch = debounce(performSearch, DELAY);

  useEffect(() => {
    getDataProduct('/api/product');
  }, []);

  useEffect(() => {
    dobouncedSearch();
  }, [search]);

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
            {products.map((product: Product) => (
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
