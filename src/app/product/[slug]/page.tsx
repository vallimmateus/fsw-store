import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/product-images";

type ProductDetailsPageProps = {
  params: {
    slug: string;
  };
};

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (!product) {
    return null;
  }
  return (
    <div>
      <ProductImages imageUrls={product.imageUrls} />
    </div>
  );
};

export default ProductDetailsPage;
