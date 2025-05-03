import React from 'react'

const Cards = ({item}) => {
    //check kro ki data freebook se aa ha hai ki nhi
    console.log(item)
  return (
    <>
    <div className='flex flex-wrap gap-6'>
      <div className="card bg-base-100 w-96 shadow-sm mt-4 my-3 w-92 p-3 hover:scale-105  dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={item.image}
      alt="Books" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
   {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className=" cursor-pointer px-2 py-1 rounded-full border bordder-[2px] hover:bg-pink-500 hover:text-white p-2 duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
