import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5';

const AddItem = () => {
  return (
    <div className="item w-1/3 h-[25vh] p-[0.25rem]">
      <div className="w-full h-full border border-gray-500 rounded-md flex py-3 justify-center items-center">
         <button className="flex items-center gap-2 group">
            <IoAddCircleOutline className="w-8 h-8 text-gray-400 font-light group-hover:text-gray-300" />
            <span className="text-gray-400 cursor-pointer group-hover:text-gray-300">할일 추가하기</span>
         </button>
      </div>
    </div>
  )
}

export default AddItem
