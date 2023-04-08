import { Product } from '@components';
import Link from 'next/link';
import { useGetProducts } from '@hooks';
import { ProductType } from '@types';

export default function Home() {
  const { data, isSuccess } = useGetProducts();

  return (
    <div className="flex justify-center align-center">
      <div className="w-1/2 flex flex-col">
        <Link
          href="/products/new"
          className="p-3 border border-gray-800 bg-gray-500 rounded-sm mb-52 "
        >
          New Product
        </Link>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock quantity</th>
              <th>Photograph</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              data.map((product: ProductType) => (
                <Product product={product} key={product.id} />
              ))}
            <Product />
          </tbody>
        </table>
      </div>
    </div>
  );
}
