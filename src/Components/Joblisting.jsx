import React from 'react'
import jobs from '../jobs.json'
import Joblist from './Joblist';

const Joblisting = () => {
  const recentjobs =jobs.slice(0,3)
  return (
    <section className='bg-cardColor px-4 py-10'>
        <div className='container'>
            <h2 className=' text-secondColor text-3xl font-bold text-center mb-6'>
                Browse jobs
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>
              {recentjobs.map((job)=>(

              <Joblist key={job.id} job={job}/>
              ))}
              

              
              
            </div>
                
        </div>

    </section>
  )
}

export default Joblisting