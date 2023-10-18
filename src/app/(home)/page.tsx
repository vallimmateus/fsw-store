import Image from "next/image";
import Categories from "./components/categories";
import ProductHorizontalList from "./components/product-horizontal-list";
import { prismaClient } from "@/lib/prisma";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div>
      <Image
        src="/banner-home-01.png"
        width={0}
        height={0}
        className="h-auto w-full px-5 pt-5"
        sizes="100vw"
        alt="Até 55% de desconto só esse mês"
      />
      <Categories className="mt-[30px] px-5" />
      <ProductHorizontalList products={deals} className="mt-8" />
    </div>
  );
}
