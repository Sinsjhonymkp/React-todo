import React from 'react'
import { BsCheck } from 'react-icons/bs'
const Check = ({ isCompleted }) => {
  return (
    <div className={`border-2 rounded-md border-pink-400 ${isCompleted ? 'bg-pink-400' : 'bg-gray-700'}  w-6 h-6 mr-3 flex justify-center items-center`}>
      {isCompleted && <BsCheck size={24} className='text-gray-900' />}
    </div>
   
  )
  
}
console.log(Check);

export default Check