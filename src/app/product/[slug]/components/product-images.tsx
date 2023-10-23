"use client";

import Image from "next/image";
import { useState } from "react"

interface ProductImagesProps {
    name: string;
    imageUrls: string[];
}

const ProductsImages = ({ imageUrls, name }: ProductImagesProps) => {
    const [currentImage, setCurrentImage] = useState(imageUrls[0]);

    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl);
    }

    return (
        <div className="flex-col flex">
            <div className="bg-accent h-[380px] w-full items-center justify-center flex">
                <Image 
                    src={currentImage} 
                    alt={name}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={{objectFit: 'contain'}}
                />
            </div>


            <button className="grid grid-cols-4 gap-4 mt-8 px-5">
                {imageUrls.map(imageUrl => (
                    <div 
                        key={imageUrl} 
                        className={`h-[100px] flex justify-center items-center bg-accent rounded-lg
                        
                        ${imageUrl === currentImage && 'border-2 border-solid border-primary' 
                        }
                    `}
                     onClick={() => handleImageClick(imageUrl)}   
                    >
                        <Image 
                            src={imageUrl} 
                            alt={name} 
                            height={0}
                            width={0}
                            sizes="100vw"
                            className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        />
                    </div>
                ) )}
            </button>

        </div>
    );
}
 
export default ProductsImages;