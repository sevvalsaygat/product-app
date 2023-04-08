import { useAxios } from '@hooks';
import { useMutation, UseMutationResult } from 'react-query';
import { CreateProductType, ProductType } from '@types';

export default function useCreateProduct(
  props?: Record<string, any>
): UseMutationResult<any, Error> {
  const axios = useAxios();

  return useMutation(
    (data: any) =>
      axios
        .post('/products', data as CreateProductType)
        .then((res) => res.data as ProductType),
    props
  );
}
