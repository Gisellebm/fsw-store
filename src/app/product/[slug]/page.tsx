import { prismaClient } from "@/lib/prisma";
import ProductsImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import { computeProductTotalPrice } from "@/helpers/product";

interface ProductDetailPageProps {
    params: {
        slug: string;
    };
}

const ProductDetailPage = async ({params: {slug}}: ProductDetailPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug,
        },
    })

    if (!product) {
        return null;
    }

    return (
        <div className="flex flex-col gap-8">
            <ProductsImages imageUrls={product.imageUrls} name={product.name} />
            <ProductInfo product={computeProductTotalPrice(product)}/>
        </div>
    )
}
 
export default ProductDetailPage;