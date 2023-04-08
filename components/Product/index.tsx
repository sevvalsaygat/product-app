import { ProductType } from '@types';
import { useDeleteProductById } from '@hooks';
import { useRouter } from 'next/router';

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const router = useRouter();

  const { mutate } = useDeleteProductById({
    onSuccess: () => {
      router.reload();
    },
  });

  return (
    <tr>
      <td>{product.product}</td>
      <td>{product.price}</td>
      <td>{product.stockQuantity}</td>
      <td>
        <button
          onClick={() => {
            mutate(product.id);
          }}
        >
          Sil
        </button>
      </td>
    </tr>
  );
}
