import React from 'react'
import Gview from './Gview';
import store from './assets/store.png';
import M4coll from "./assets/m4.png";
import akpink from "./assets/ak.png";
import awm from "./assets/awm.png";
import akp from "./assets/ak p.png";
import akv from "./assets/akv.png";




const nfts = [
  {
    id: 1,
    name: "Laptop",
    price: 3000,
    disc: "limited edition",
    img: M4coll,
  },
    {
    id: 2,
    name: "Ak-47 Colorisempty",
    price: 32.7,
    disc: "limited edition",
    img: akpink,
  },
      {
    id: 3,
    name: "AWP Crow",
    price: 12.3,
    disc: "limited edition",
    img: awm,
  },     {
    id: 4,
    name: "AK Printstream",
    price: 22.0,
    disc: "limited edition",
    img: akp,
  },
     {
    id: 5,
    name: "AK Neon",
    price: 2.3,
    disc: "NFT.G 005",
    img: akv,
  },
  

];
export default function Store() {
  return (
    <div className=' px-24 mt-24 w-full h-full'>
   


      <div className='flex gap-1'>

     
   
 {nfts.map((g) => (
  <div
    key={g.id}
    className='group hover:bg-[#232327] flex-col justify-center items-center gap-6 w-45 h-51.5 bg-[#1d1d26] rounded'
  >
    <img className='mx-6 w-34 mt-6' src={g.img} />
    <h1 className='mx-2 group-hover:opacity-100 opacity-0 text-md font-semibold text-indigo-700'>{g.name}</h1>
    <p className='text-zinc-600 text-sm font-semibold mx-2'>{g.disc}</p>
    <span className='mx-2 flex justify-center items-center gap-7'>
      <h3 className='text-zinc-200 text-xl font-safa'>${g.price}</h3>
      <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20">-20%</span>
    </span>
    <button className='mx-2  group-hover:opacity-100  opacity-0 flex justify-center items-center transition-opacity ease-in-out duration-300 gap-3 bg-[#3a35fb] h-8 w-11/12 rounded text-white font-semibold'>
      <img className='w-4 h-4' src={store} />Buy</button>
     
  </div>
))}






      </div>
    </div>
  )
}
