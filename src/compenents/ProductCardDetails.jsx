import React from 'react';
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";


function ProductCardDetails() {
    return (
        <>
            <div className='flex flex-col gap-16 px-[165px] lg:px-[24px] mt-[40px] pb-10 font-sans'>
                <div className='h-[560px] lg:h-auto w-full flex flex-row md:flex-col md:items-start md:justify-start gap-16  '>
                    <div className='h-[520px] lg:h-[350px] w-1/2 lg:w-full bg-light-gray-2 rounded-md flex justify-center items-center'>
                        <img src="src/assets/HeadphoneXX99.png" alt=""
                            className={`w-[300px] h-[350px] lg:h-[240px] lg:w-[210px]  `} />
                    </div>
                    <div className='w-1/2 md:w-full flex flex-col gap-4 justify-center md:justify-start items-start  font-sans'>
                        <h3 className=' text-sm tracking-widest font-medium text-orange '>NEW PRODUCT</h3>
                        <h1 className='font-bold text-h2'>XX99 MARK II <br />HEADPHONES</h1>
                        <p className='font-medium text-base text-black text-opacity-60 lg:text-pretty lg:text-center w-full'>
                            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                        <h1 className='text-h6 font-bold'>$ 2,999</h1>
                        <div className='mt-4 flex gap-4 md:w-full'>
                            <span className='w-32 md:w-full h-12 bg-light-gray-1 flex justify-between items-center px-4 gap-2 font-medium '>
                                <FiMinus className='cursor-pointer text-sm text-black hover:text-orange' />
                                1
                                <LuPlus className='cursor-pointer text-sm text-black hover:text-orange' />
                            </span>
                            <button className=' w-40 md:w-full h-12 bg-orange hover:bg-accent-orange'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCardDetails
