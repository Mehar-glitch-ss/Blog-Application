import React from 'react'

const Blogdetailheading = ({params}) => {
  return (
    <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
          {params.blogid}
          </h2>
          <a 
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            Cryptocurrency
          </a>
        </div>
  )
}

export default Blogdetailheading
