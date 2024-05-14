import { Product } from '@/type/product.type';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  products: Product[];
};

const products = [
  {
    id: 1,
    name: 'Apple iPhone 15 Pro',
    price: 999,
    stock: 10,
  },
  {
    id: 2,
    name: 'Apple iPhone 14 Pro',
    price: 800,
    stock: 5,
  },
  {
    id: 3,
    name: 'Apple MacBook Pro',
    price: 2000,
    stock: 20,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    const search = req.query.search;

    if (search) {
      const searchResult = products.filter((product: Product) => {
        return product.name
          .toLowerCase()
          .includes(search.toString().toLowerCase());
      });
      res.status(200).json({ products: searchResult });
    }
    res.status(200).json({ products: products });
  }
}
