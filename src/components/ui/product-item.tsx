import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

type ProductItemProps = {
  product: ProductWithTotalPrice;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex min-w-[156px] flex-col gap-[15px]">
        <div className="relative flex aspect-square w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3 px-2 py-0.5">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="truncate text-xs">{product.name}</p>
          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="whitespace-nowrap font-semibold">
                  R$ {product.totalPrice.toFixed(2)}
                </p>
                <p className="whitespace-nowrap text-xs font-normal text-zinc-600 line-through">
                  R$ {product.basePrice.toFixed(2)}
                </p>
              </>
            ) : (
              <p className="whitespace-nowrap font-semibold">
                R$ {product.basePrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
