import React from 'react'

const Speaker = ({image, name, job}) => {
  return (
    <div class="flex flex-col items-center">
      <div className="w-64 mb-4">
        <img className="rounded-full" src={image} alt={name} />
      </div>

      <h5 className="text-xl font-bold mb-2">{name}</h5>
      <span className="text-gray-500">
        {job}
      </span>
    </div>
  )
}

export default Speaker