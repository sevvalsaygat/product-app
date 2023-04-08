import { useForm } from 'react-hook-form';
import { useCreateProduct } from '@hooks';
import { useRouter } from 'next/router';

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useCreateProduct({
    onSuccess: () => {
      router.push('/');
    },
  });

  const onSubmit = (data: any) => {
    mutate({
      isCompleted: false,
      ...data,
    });
  };

  const router = useRouter();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <input {...register('product')} placeholder="product" />
      </div>
      <input {...register('price')} placeholder="Price"></input>
      <input
        {...register('stock quantity')}
        placeholder="Stock quantity"
      ></input>
      <input {...register('photograph')} placeholder="Photograph"></input>
      <button type="submit">Created</button>
    </form>
  );
}
