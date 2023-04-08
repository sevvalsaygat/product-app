import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { CreateProductType, ProductType } from '@types';

export default function useDeleteProductById(
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (id) =>
      axios.delete(`/products/${id}`).then((res) => res.data as ProductType),
    props
  );
}
