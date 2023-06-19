import React from 'react'

const CardButton = () => {
  return (
    <div className='flex relative mt-5 flex-col items-center p-4 text-white h-[58.2px]  lg:w-auto bg-black   rounded-[20px]'>

          <div className='flex flex-col  items-center justify-center ' >
              <div className='flex gap-[10px] h-[24px] w-[370px] font-light text-[19px]  text-center justify-center'>
                      <div className='justify-between'>
                          <span>£25.00 GBP</span>
                      </div>
                      <div>
                          <span>BUY ENTRY NOW</span>
                      </div>
                  </div>
                      
            </div>
          <div className='flex absolute bottom-0 right-0 pb-4 h-[12px] w-[95px] font-light text-[9px]  text-right'>

<span>#ZM7861234567</span>

</div>
          </div>
  )
}

export default CardButton