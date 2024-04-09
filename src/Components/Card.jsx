import React from 'react'

function Card(props) {
    // console.log(props)
  return (
    <div className='  w-60 h-56 rounded-md m-2 p-2 bg-gray-300'>
        <img className=' w-full rounded-md h-full ' src={props.memeData.preview[1]}/>
    </div>
  )
}

export default Card