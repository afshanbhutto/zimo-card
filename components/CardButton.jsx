import React from 'react'

const CardButton = () => {
  return (
    <button className='flex absolute  w-[100%] bottom-36  lg:bottom-20 flex-col items-center justify-between p-4 text-white h-[58.2px]   bg-black   rounded-[20px]'>
      {/* lg:bottom-20 */}
      <div className='flex flex-col w-full items-center justify-center  ' >
        <div className='flex justify-between w-full font-light text-[12px]  lg:text-[15px]  text-center'>

          <div className='flex-1'>£25.00 GBP</div>

          <div className='flex-1'>BUY ENTRY NOW</div>

        </div>

      </div>
      <div className='flex absolute  bottom-0 justify-end right-2 pb-4 h-[12px] w-[95px] font-light text-[9px]  text-right'>

        <span>#ZM7861234567</span>

      </div>
    </button>

    // {/* <div></div> */}
  )
}

export default CardButton