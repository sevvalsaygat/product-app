import { Product } from '@components';

export default function Home() {
  return (
    <div className="flex justify-center align-center">
      <div className="w-1/2 flex flex-col">
        <button className="p-3 border border-gray-800 bg-gray-500 rounded-sm mb-52 ">
          New Product
        </button>
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
            <Product />
          </tbody>
        </table>
      </div>
    </div>
  );
}
