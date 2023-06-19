import React from 'react';
import {FiShare2} from 'react-icons/fi';
import {AiFillHeart} from 'react-icons/ai'

const ImageIcons = () => {
    return (
        <div className='w-[100%] absolute top-28 flex justify-end right-1'>
            <div className='w-[26px] h-[23px] absolute right-2'>
            <AiFillHeart className='fill-[#B00000] w-[100%] h-[100%] ' />
                
            </div>
            <div className='w-[26px] h-[23px] absolute right-10'>
            <FiShare2 className='text-white w-[100%] h-[100%]' />
            </div>
        </div>
    )
}

export default ImageIcons