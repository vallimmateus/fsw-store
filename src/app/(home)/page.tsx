import Categories from "./components/categories";
import ProductHorizontalList from "./components/product-horizontal-list";
import { prismaClient } from "@/lib/prisma";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês"
      />
      <Categories className="mt-[30px] px-5" />
      <ProductHorizontalList products={deals} title="Ofertas" />
      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses"
      />
      <ProductHorizontalList products={keyboards} title="Teclados" />
      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 20% de desconto em fones"
      />
      <ProductHorizontalList products={keyboards} title="Teclados" />
    </div>
  );
}
