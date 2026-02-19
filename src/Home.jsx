import React from 'react'
import mainbg from './assets/bgmain.png'
import lock from './assets/lock.png'
import cs from './assets/cs2.png'
export default function Home() {
  return (
    <div className='flex flex-col h-full w-full justify-center items-center font-safa mt-16' >

        <div className='flex flex-col h-[60vh] rounded w-10/12 gap-8  justify-center p-10 ' style={{ backgroundImage: `url(${mainbg})`, backgroundSize : 'cover'}}>
        <h1 className='text-zinc-100 text-6xl font-medium w-130'>Instant, Secure Gun NFT skins trading</h1>
        <span className='flex-row'>
        <h1 className='text-zinc-300 text-xl font-medium w-130'>Faster NFTS n thistoo re wright basla game to games</h1>
        <h1 className='text-zinc-600 text-lg font-medium   w-130'>Tradeit.gg is the highest rated CS2 (CSGO) skin trading site.
The best trading bot for instant trades with the lowest fees</h1>
</span>
<div className='flex flex-row  items-center gap-5'>
    <button className='flex justify-center items-center cursor-pointer px-12 py-5 w-64 h-14 rounded-md bg-[#3a35fb] font-bold text-xl text-white'>Trade Skin Now</button>
    <h2 className='text-zinc-300 font-semibold text-xl '>🎁Register now and get $5 bonus</h2>
</div>
        </div>

      
      <div className='flex gap-12 mt-24 mb-12 '>

        <div className='flex gap-4 items-center boder  p-9 w-120 h-50 rounded-xl bg-[#1d1d26]'>
            <span className='flex-col gap-2'>
            <h1 className='text-zinc-200 font-semibold text-2xl'>Verified Payment method</h1>
            <p className='text-zinc-400 text-lg w-60'>Iuhiudfg iuig fiugfd dfg iugfd dfg dfgdfg dfgdfgfdgdf.</p>
            </span>
            <img className='w-50' src={lock} />
        </div>


           <div className='flex gap-4 items-center boder  p-9 w-120 h-50 rounded-xl bg-[#1d1d26]'>
               <span className='flex-col gap-2'>
            <h1 className='text-zinc-200 font-semibold text-2xl'>Verified Payment method</h1>
            <p className='text-zinc-400 text-lg w-60'>Iuhiudfg iuig fiugfd dfg iugfd dfg dfgdfg dfgdfgfdgdf.</p>
             </span>
               <img  className='relative bottom-18 w-70' src={cs} />
        </div>

      </div>
    </div>
  )
}
