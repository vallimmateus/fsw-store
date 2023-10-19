import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import SectionTitle from "../../app/(home)/components/section-title";
import { title } from "process";

type ProductHorizontalListProps = {
  products: Product[];
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const ProductHorizontalList = ({
  products,
  title,
  className,
}: ProductHorizontalListProps) => {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {title && <SectionTitle>{title}</SectionTitle>}
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductHorizontalList;
