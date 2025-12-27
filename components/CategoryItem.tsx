import React from "react";
import Link from "next/link";

interface CategoryItemProps {
  children: React.ReactNode;
  title: string;
  href: string;
}

const CategoryItem = ({ children, title, href }: CategoryItemProps) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-y-2 cursor-pointer bg-white py-5 text-black hover:bg-gray-100">
        {children}
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryItem;
