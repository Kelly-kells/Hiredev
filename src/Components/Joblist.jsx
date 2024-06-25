
import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
const Joblist = ({ job }) => {
  const [fullDescription, setFullDescription] = useState(false)

  let description = job.description;
  if (!fullDescription) {
    description = description.substring(0, 80) + "...";
  }

  return (

    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2 '>
            {job.type}
          </div>
          <h3 className='xl font-bold '>
            {job.title}
          </h3>
        </div>
        <div className='mb-5'>
          {description}
        </div>

        <h3 className=' text-secondColor mb-2'>{job.salary}</h3>
      </div>
      <div className="border border-gray-100 mb-5">
      </div>
      <div className='flex flex-col lg:flex-row justify-between mb-4'>

        <div className=" text-red-500 flex p-4 gap-4">
          <FaLocationDot />  {job.location}

        </div>
        <button className='text-center bg-secondColor md:mr-4 w-full md:w-28 md:h-10  rounded-md text-white '> <a href={`/job/${job.id}`}> Read more</a></button>
      </div>

    </div>
  )
}

export default Joblist
