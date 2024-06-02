import React from 'react'

const Homecards = () => {
  return (
    <section className=''>
<div className=" container">
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4  rounded-lg'>
 <div className=' bg-cardColor p-6 rounded-lg shadow-md flex flex-col items-center '>
  <h2 className=' font-bold text-2xl text-center'>For Developers</h2>
      <p className='mt-2 mb-4 text-center'> Browse our developer jobs and start a career today </p>
      <button className=' bg-primeColor w-28 text-center  p-2 shadow-md rounded-lg  '               >
        <a href="/jobs.html" className='text-white text-center'>
   Browse jobs
        </a>
      </button>
 </div>

 <div className=' bg-cardColor p-6 rounded-lg shadow-md flex flex-col items-center'>
  <h2 className=' font-bold text-2xl'>For Employers</h2>
      <p className='mt-2 mb-4'>List your jobs to find a perferct developer for the role </p>
      <button className=' bg-secondColor w-28   p-2 shadow-md rounded-lg  '               >
        <a href="/jobs.html" className='text-white '>
Add jobs
        </a>
      </button>
 </div>
    </div>
</div>
        </section>
  )
}

export default Homecards