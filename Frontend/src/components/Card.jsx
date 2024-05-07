import React from 'react'

export default function Card({item}) {
  return (
   <>
            {/* Replace this with your featured products */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={item.image} alt="Product" className="w-full h-48 object-cover mb-4" />
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-gray-600">{item.title}</p>
              <p className="mt-2 text-blue-600 font-semibold">{item.price}</p>
            </div>
            {/* Repeat the above card structure for each featured product */}
   </>
  )
}
