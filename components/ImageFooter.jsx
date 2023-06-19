/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ImageFooter = () => {
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
                        <div  className='w-[30px] h-[30px]'>
                        <img src="/assets/discount-img.png" alt="" className='w-[100%] h-[100%] ' />
                        </div>
                        
                        </div>
                        <div className='w-[45px] h-[40px]'>
                        <img src="/assets/footer-yellow-savills.png" alt="logo" className='w-[100%] h-[100%] ' />
                        </div>
                    </div>
                    
                </div>
  )
}

export default ImageFooter