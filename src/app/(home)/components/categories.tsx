import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";
import { cn } from "@/lib/utils";

type CategoriesProps = React.HTMLAttributes<HTMLDivElement>;

const Categories = async ({ className }: CategoriesProps) => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className={cn("grid grid-cols-2 gap-x-4 gap-y-2.5", className)}>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
