import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";

type ProductHorizontalListProps = {
  products: Product[];
} & React.HTMLAttributes<HTMLDivElement>;

const ProductHorizontalList = ({
  products,
  className,
}: ProductHorizontalListProps) => {
  return (
    <div
      className={cn(
        "flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

export default ProductHorizontalList;
