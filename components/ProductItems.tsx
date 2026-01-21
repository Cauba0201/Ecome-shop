import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sanitize } from "@/lib/sanitize";

const ProductItems = ({ product, color }: { product: any; color: string }) => {
  return (
    <div>
      <Link href={`/product/${product?.slug}`} className="w-auto h-[300px]">
        <Image
          src={product.mainImage ? `/${product.mainImage}` : "/placeholder.png"}
          alt={sanitize(product?.title) || "Product image"}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-[300px]"
        />
      </Link>
      <Link
        href={`/product/${product?.slug}`}
        className={
          color === "black"
            ? `text-xl text-black font-normal mt-2 uppercase`
            : `text-xl text-white font-normal mt-2 uppercase`
        }
      >
        {sanitize(product.title)}
      </Link>
      <p
        className={
          color === "black"
            ? "text-lg text-black font-semibold"
            : "text-lg text-white font-semibold"
        }
      >
        ${product.price}
      </p>

      <Link
        href={`/product/${product?.slug}`}
        className="block flex justify-center items-center w-full uppercase bg-white px-0 py-2 text-base border border-black border-gray-300 font-bold text-blue-600 shadow-sm hover:bg-black hover:bg-gray-100 focus:outline-none focus:ring-2"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductItems;
