import React from 'react'
import { categories } from '../constant/Categories'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className="px-5 md:px-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="group flex items-center justify-between gap-4 rounded-xl px-4 py-4 border border-gray-200 shadow-xs  hover:bg-gray-300 hover:scale-102 
            duration-500"
          >
           <div className='flex gap-5 items-center'>
            <div className="relative w-16 h-16">
              <Image src={item.image} alt={item.name} fill className="rounded-full object-cover group-hover:scale-109 duration-500" />
            </div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
</div>

            <div className="h-10 w-10 bg-pink-200 rounded-full flex items-center justify-center group-hover:bg-pink-300 duration-500 group-hover:text-lg">
              <item.icon className='text-pink-600 font-semibold ' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories