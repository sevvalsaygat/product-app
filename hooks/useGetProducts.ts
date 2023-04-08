import { useAxios } from '@hooks';
import { useQuery, UseQueryResult } from 'react-query';
import { ProductType } from '@types';

export default function useGetProducts(
  props?: Record<string, any>
): UseQueryResult<any, Error> {
  const axios = useAxios();

  return useQuery(
    ['useGetProducts'],
    () => axios.get('/products').then((res) => res.data as Array<ProductType>),
    props
  );
}
