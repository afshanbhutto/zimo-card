import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate }) => {
  const [countdownData, setCountdownData] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString().padStart(2, '0');
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');

      // Update the state with the countdown data
      setCountdownData({ days, hours, minutes, seconds });

      // Check if the countdown is finished
      if (difference < 0) {
        clearInterval(interval);
        setCountdownData({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    
    <div className='absolute  text-white flex uppercase gap-8 text-center justify-center opacity-80 bg-gradient-to-b from-[#000000] via-[rgba(0,0,0,0.92)] to-[rgba(0,0,0,0.0)] rounded-[20px] w-[100%]'>
      <div><div className="time text-[56px]"> 
        {countdownData.days} </div>
        <div className="timeInText text-[12px]">days</div></div>
      <div><div className="time text-[56px]"> {countdownData.hours}</div> <div  className="timeInText text-[12px]">hours</div></div>
      <div><div className="time text-[56px]"> {countdownData.minutes} </div><div  className="timeInText text-[12px]">minutes</div></div>
      <div><div className="time text-[56px]"> {countdownData.seconds} </div><div  className="timeInText text-[12px]">seconds</div></div>
    </div>
  );
};



export default Countdown;
