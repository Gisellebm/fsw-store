import { CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

interface CartItemProps {
    product: CartProduct
}

const CartItem = ({product}: CartItemProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                {/**PARTE DIREITA (FOTO E NOME) */}

                <div className="flex items-center justify-center rounded-lg bg-accent h-[77px] w-[77px] "> 
                    <Image 
                        src={product.imageUrls[0]}  
                        alt={product.name} 
                        width={0} 
                        height={0}
                        sizes="100vw"
                        className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    />    
                </div>

                <div className="flex flex-col">
                    <p className="text-xs">{product.name}</p>
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                        {product.discountPercentage > 0 && (
                            <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
                        )}
                    </div>

                    <div className="flex items-center gap-1">
                        <Button size="icon" variant={"outline"} className="h-8 w-8">
                            <ArrowLeftIcon size={16} />
                        </Button>

                        <span className="text-xs">{product.quantity}</span>

                        <Button size="icon" variant={"outline"} className="h-8 w-8">
                            <ArrowRightIcon size={16} />
                        </Button>
                    </div>
                </div>
            </div>

            
            <Button size="icon" variant={"outline"}>
                <TrashIcon size={16} />
            </Button>
            
        </div>
     );
}
 
export default CartItem;