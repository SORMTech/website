import React from "react";
import img from "../images/hero.png";

function Hero() {
  return (
    <>
      <div className='bg-orange-600 px-5 py-20 text-white flex flex-col md:flex-row gap-4 items-center justify-center'>
        <div className='md:w-1/2'>
          <div className='flex items-center'>
            <div className='w-20 p-7 h-20 bg-gray-200 opacity-50'></div>
            <h4 className=' hero_h4 text-sm md:text-xl uppercase -ml-14 font-bold'>
              THE BEST DIGITAL AGENCY.
            </h4>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold my-2 capitalize leading-normal '>
            We help brand grow to unlock their potential.
          </h2>
          <p className='leading-normal text-sm text-gray-100'>
            We are here to help you manage your online reputation and we create
            a web presence that will make your brand grow.
          </p>
          <div className='bg-white p-2 my-4'>
            <form action='' className='flex text-sm items-center'>
              <input
                type='email'
                placeholder='Email'
                className='text-gray-700 w-full p-3'
              />
              <input
                type='submit'
                value='Get started'
                className='w-1/3 bg-orange-600 p-2'
              />
            </form>
          </div>
        </div>
        <div>
          <div className='hero_img'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
