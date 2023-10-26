"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
    product: ProductWithTotalPrice;
}

const ProductInfo = ({product}: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1);

    const handledecreaseQuantityClick = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1))
    }

    const handleincreaseQuantityClick = () => {
        setQuantity((prev) => prev + 1)
    }
    return (
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{product.name}</h2>
            <div className="flex items-center gap-2">
                <h1 className="text-[1.375rem] font-bold">R$ {product.totalPrice.toFixed(2)}</h1>
                {product.discountPercentage > 0 && (
                    <DiscountBadge>
                        {product.discountPercentage}
                    </DiscountBadge>
                )}
            </div>

            {product.discountPercentage > 0 && (
                <p className="text-zinc-600 text-sm">De: <span className="line-through">R$ {Number(product.basePrice).toFixed(2)}</span></p>
            )}

            <div className="flex items-center gap-2 mt-4">
                <Button size="icon" variant={"outline"} onClick={handledecreaseQuantityClick}>
                    <ArrowLeftIcon size={16} />
                </Button>

                <span>{quantity}</span>

                <Button size="icon" variant={"outline"} onClick={handleincreaseQuantityClick}>
                    <ArrowRightIcon size={16} />
                </Button>
            </div>

            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-bold">Descrição</h3>
                <p className="text-sm text-justify antialiased text-[#A1A1A1]">{product.description}</p>
            </div>

            <Button className="uppercase mt-8 font-bold">Adicionar ao carrinho</Button>

            <div className="flex items-center bg-[#2A2A2A] px-5 py-2 justify-between mt-5 rounded-lg">
                <div className="flex items-center gap-3">
                    <TruckIcon size={30} />

                    <div className="flex flex-col text-xs leading-6">
                        <p>Entrega via <span className="font-bold">FSPacket®</span></p>
                        <p className="text-[#8162FF]">Envio para <span className="font-bold">todo Brasil</span></p>
                    </div>
                </div>
                <p className="font-bold text-xs">Frete Grátis</p>
            </div>
        </div>
    );
}
 
export default ProductInfo;