/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ImageFooter = ({slides}) => {
  return (
    <div className='bottom-0 left-0 h-[159px] w-[100%] absolute  rounded-b-[20px] flex flex-col opacity-80 bg-gradient-to-t from-[rgba(0,0,0,0.92)] via-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0)'>
                    
                        <div className='absolute bottom-10 w-[100%] px-2 flex font-normal text-[10px] tracking-[2px] text-white text-center'>
                        <p>SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM</p>
                        </div>
                    <div className='absolute bottom-1 flex  px-4 justify-between  w-[100%]  items-center '>
                        <div className='w-[60px] h-[15px] '>
                        <img src="/assets/white-logo.png" alt="logo" className='w-[100%] h-[100%] ' />
                        
                        </div>
                        <div className=' font-normal text-center text-white flex gap-2'>
                        <div>
                                <p className='text-[14px]'>£5,000,000 GBP</p>
                                <p className='text-[9px]'>#ZM7861234567</p>
                        </div>
                        <div  className='w-[32px] h-[32px]'>
                        <img src={slides.discountImg} alt="" className='w-[100%] h-[100%] ' />
                        
                        </div>
                        
                        </div>
                        <div className='w-[53px] h-[30px]'>
                        <img src={slides.footerImg} alt="logo" className='w-[100%] h-[100%] ' />
                        </div>

                        {/* <div className=' text-white w-[36px] h-[36px] absolute opacity-95 bg-[#1d1d1b] border-black border-[1px]
                        border-solid' style={{

backgroundImage: 'linear-gradient(90deg, #1d1d1b 0.00%, #312d22 16.48%, #655735 50.35%, #b99b54 98.31%, #bd9e56 100.00%, #931d80 100.00%)'
}}>
                        <p>23%</p>
                        </div> */}
                    </div>
                    
                </div>
                
  )
}

export default ImageFooter