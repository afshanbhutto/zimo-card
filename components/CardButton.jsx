import React from 'react'

const CardButton = () => {
  return (
    <div className='flex relative mt-5 flex-col items-center justify-between p-4 text-white h-[58.2px]  lg:w-auto bg-black   rounded-[20px]'>

          <div className='flex flex-col w-full items-center justify-center  ' >
              <div className='flex justify-between w-full font-light text-[19px]  text-center'>
                      
                          <div>£25.00 GBP</div>
                      
                          <div>BUY ENTRY NOW</div>
                      
                  </div>
                      
            </div>
          <div className='flex absolute  bottom-0 justify-end right-2 pb-4 h-[12px] w-[95px] font-light text-[9px]  text-right'>

<span>#ZM7861234567</span>

</div>
          </div>

// {/* <div></div> */}
  )
}

export default CardButton