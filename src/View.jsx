import React from 'react'
import ApexChart from "./Chart";
import akpink from "./assets/ak.png";
import Gview from './Gview';
import { Link } from 'react-router-dom';
export default function View() {
  return (
    <div className='mt-12 flex gap-10 justify-center w-auto h-full '>


          <div className='flex flex-col items-center gap-0.5  w-82 h-auto py-10 bg-[#16161d]'>
            <img className='w-10/12' src={akpink} />
            <h1 className='text-xl w-10/12 font-bold text-white font-safa'>LKNAZEI AZO IEIZ AOIE</h1>
            <button className='rounded w-11/12 h-11 bg-[#1d1d26] px-3 flex  items-center gap-30 text-sm font-safa'><span className='w-23 text-zinc-700 '>Price Unite</span><span className='text-white font-bold'>$120</span></button>
            <button className='rounded w-11/12 h-11 bg-[#1d1d26] px-3 flex  items-center gap-30 text-sm font-safa'><span className='w-23 text-zinc-700 '>Price New</span><span className='text-white font-bold'>$120</span></button>
            <button className='rounded w-11/12 h-11 bg-[#1d1d26] px-3 flex  items-center gap-30 text-sm font-safa'><span className='w-23 text-zinc-700 '>Rarety</span><span className='text-white font-bold'>$120</span></button>
              <span className='flex justify-center items-center w-11/12 gap-1'>
                   <button className='bg-green-600 rounded text-2xl w-1/2 h-19 text-center text-white font-semibold'>BUY</button>
                   <button disabled={true} className='bg-blue-600 rounded text-2xl w-1/2 h-19 text-center text-white font-semibold'>TRADE</button>
              </span>
                          <button className='rounded w-11/12 h-11  px-3 flex text-center justify-center items-center gap-30 text-sm font-safa font-semibold text-white border-blue-500 border'><Link to="/prv">Preview Gun</Link></button>

          </div>
    

          <div className='flex flex-col gap-0.5 font-safa'>
              <div className='flex gap-0.5'>
                  <div className='flex flex-col justify-center gap-2 w-1/3 h-27 px-4 bg-[#16161d] text-white text-xl'><span className='font-semibold'>$101</span><span className='text-zinc-700 text-sm'>BUY PRICE</span></div>
                  <div className='flex flex-col justify-center gap-2 w-1/3 h-27 px-4 bg-[#16161d] text-white text-xl'><span className='font-semibold'>$101</span><span className='text-zinc-700 text-sm'>TRADE PRICE(recomended)</span></div>
                  <div className='flex flex-col justify-center gap-2 w-1/3 h-27 px-4 bg-[#16161d] text-white text-xl'><span className='font-semibold'>$101</span><span className='text-zinc-700 text-sm'>SELL PRICE</span></div>
              </div>
               <div className='p-2 bg-[#16161d]'><ApexChart/></div>
          </div>


    </div>
    
  )
}

