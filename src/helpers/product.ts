import { Product } from "@prisma/client";

export type ProductWithTotalPrice = Product & {
  totalPrice: number;
};

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  let totalPrice;
  if (product.discountPercentage === 0) {
    totalPrice = Number(product.basePrice);
  }
  totalPrice =
    Number(product.basePrice) * ((100 - product.discountPercentage) / 100);
  return {
    ...product,
    totalPrice,
  };
};
