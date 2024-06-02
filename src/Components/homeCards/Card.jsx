import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-cardColor p-6 rounded-lg shadow-md flex flex-col items-center'>

{children}
    </div>
  )
}

export default Card