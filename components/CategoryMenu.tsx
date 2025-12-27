import React from 'react'
import CategoryItem from './CategoryItem'
import Image from 'next/image'
import { categoryMenuList } from '@/lib/utils'
import Heading from './Heading'

const CategoryMenu = () => {
  return (
    <div className="container mx-auto py-10">
      <Heading title="Danh mục sản phẩm" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoryMenuList.map((item) => (
          <CategoryItem key={item.id} title={item.title} href={item.href}>
            <Image src={item.src} alt={item.title} width={50} height={50} />
          </CategoryItem>
        ))}
      </div>
    </div>
  )
}

export default CategoryMenu