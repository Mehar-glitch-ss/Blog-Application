import React from 'react'
import { useParams } from 'react-router-dom'
import Blogdetailheading from './Blogdetailheading'
import BlogdetailImage from './BlogdetailImage'
import Blogdetaildescription from './Blogdetaildescription'
import Blogdetailuser from './Blogdetailuser'
import Blogcard2 from '../Home/Blogcard2'
const Blogdetail = () => {
  const params = useParams()
  return (
   

    <main className="mt-10 px-10 pt-5 pb-10">

      <div className="mb-4 md:mb-0 w-full mx-auto relative ">
        <Blogdetailheading params = {params} />

        <BlogdetailImage />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-16">

<Blogdetaildescription />
  <div className="sidebox ">
  <Blogdetailuser />
  <Blogcard2 />
  <Blogcard2 />
  </div>

      </div>
    </main>

  )
}

export default Blogdetail