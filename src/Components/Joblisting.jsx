import React from 'react'
import jobs from '../jobs.json'
import { FaLocationDot } from "react-icons/fa6";

const Joblisting = () => {
  return (
    <section className='bg-cardColor px-4 py-10'>
        <div className='container'>
            <h2 className=' text-secondColor text-3xl font-bold text-center mb-6'>
                Browse jobs
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
              {jobs.map((job)=>(

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
{job.description}
 </div>
 <h3 className=' text-secondColor mb-2'>{job.salary}</h3>
</div>
  <div className="border border-gray-100 mb-5">
  </div>
  <div className='flex flex-col lg:flex-row justify-between mb-4'>
  
  <div className=" text-red-500 flex p-4 gap-4">
  <FaLocationDot />  {job.location}
  </div>
  </div>
  <button className='text-center bg-secondsColor w-full rounded-md text-white '> <a href={`/job/${job.id}`}> Read more</a></button>
</div>

              ))}
              

              
              
            </div>
                
        </div>

    </section>
  )
}

export default Joblisting