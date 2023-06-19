import React, { useState } from 'react'
import Countdown from "@/components/Countdown";
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {TiMediaPlay, TiMediaPlayReverse} from 'react-icons/ti'
import {AiOutlineLine} from 'react-icons/ai'
import ImageFooter from './ImageFooter';
import ImageIcons from './ImageIcons'
import CardButton from './CardButton'


const CardSlider = ({ slides }) => {


    //countdown
    // Set the target date for the countdown (e.g., 1 hour from now)
    const targetDate = new Date().getTime() + 7200000000;

    // images
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveToPrevious = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex =  isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const moveToNext = () =>{
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex =  isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const moveToSlide = (slideIndex) => {

        obj.style.backgroundColor="#D94A38"
        setCurrentIndex(slideIndex);
    }


    return (
        <div id="slider" className='h-[100%] relative'>

            {/* countdown */}

            
        <Countdown targetDate={targetDate} />
        

            {/* Arrows */}
            <div id="prevArrow"
                className='absolute top-[50%] left-[10px] 
            text-white transform -translate[50%]  z-1 cursor-pointer'
                style={{ transform: "translate(0, -50%)" }}
                onClick={moveToNext}>
                <TiMediaPlayReverse className='w-[25px] h-[20px]' />
            </div>
            <div id="nextArrow"
                className='absolute top-[50%] 
            right-[10px]  text-white transform -translate[50%] 
             z-1 cursor-pointer' style={{ transform: "translate(0, -50%)" }}
                onClick={moveToPrevious}>
                <TiMediaPlay className='w-[25px] h-[20px]' />
            </div>
            <div id='slide' style={{ backgroundImage: `url(${slides[currentIndex].imgUrl})` }}
                className='w-[100%} h-[100%] bg-center bg-cover rounded-[20px]'></div>

            {/* slideLines  */}
            <div id="slideLines" className='flex justify-center absolute left-[30%] z-10 bottom-20'>
                {
                    slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className='mx-1  cursor-pointer' onClick={()=> moveToSlide(slideIndex)}>
                            <AiOutlineLine size={20} className='w-[20px]  text-white '/>
                        </div>
                    ))
                }
            </div>

            <ImageFooter className="z-1"/>
            <ImageIcons className="z-1"/>
            <CardButton/>
        </div>
    )
}

export default CardSlider