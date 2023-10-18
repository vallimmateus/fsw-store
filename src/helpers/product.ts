import { Product } from "@prisma/client";

type ProductWithTotalPrice = Product & {
  totalPrice: number;
};

const computeProductTotalPrice = (product: Product) => {
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
