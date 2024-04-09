import React from 'react'

function Shimmer() {
  return (


  <>
    
        {Array(10).fill("").map((item,index)=>{
            return <div key={index} className='w-60 h-56 rounded-md m-2 p-2 bg-gray-300'> </div>
        })}
   </>
  )
}

export default Shimmer