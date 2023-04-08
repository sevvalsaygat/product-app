type CreateProductType = {
  product: string;
  price: number;
  stockQuantity: number;
};

type ProductType = {
  product: string;
  price: number;
  id: number;
  stockQuantity: number;
};

export type { CreateProductType, ProductType };
