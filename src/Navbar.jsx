import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from './assets/logo.jpg'
import google from './assets/google.webp'
import wallet from './assets/wallet.png'
import hoverSound from './assets/sounds/hover.mp3'
import clickSound from './assets/sounds/click.mp3'
export default function Navbar() {
function playSound() {
  const audio = new Audio(hoverSound);
  audio.play();
}
  function playSound2() {
  const audio = new Audio(clickSound);
  audio.play();
}


  return (
     <div className="bg-[#131217] w-full h-14 flex flex-row justify-center items-center gap-90">
        <div className="flex mr-72 gap-8">
        <span className="flex justify-center items-center">
            <Link to="/">
        <img className="w-24 mx-4" src={logo}/> </Link>
       
       
        </span>
        <nav className="flex justify-center items-center gap-3 font-safa text-zinc-500 px-10">
            <h4 onMouseEnter={playSound} onClick={playSound2} className="hover:text-white cursor-pointer"><Link to="/store">Trade</Link></h4>
            <h4 onMouseEnter={playSound} onClick={playSound2}  className="hover:text-white cursor-pointer"><Link to="/store">Store</Link></h4>
            <h4 onMouseEnter={playSound} onClick={playSound2}  className="hover:text-white cursor-pointer"><Link to="/store">Sell</Link></h4>
            <h4 onMouseEnter={playSound} onClick={playSound2}  className="hover:text-white cursor-pointer"><Link to="/view">Giveaway</Link></h4>

        </nav>
        </div>
        <div className=" flex gap-1">
                    <button className=" flex gap-2 justify-center items-center px-4 p-1 bg-[#3a35fb] font-semibold text-white text-sm rounded cursor-crosshair"><h4>Log in With </h4> <img className="w-7 h-6 px-1" src={google}/></button>
                    <button className=" flex gap-3 justify-center items-center px-4 p-1 border-[#3a35fb] border font-semibold text-white text-sm rounded cursor-crosshair"><h4>Wallet</h4><img className="w-5 h-5 " src={wallet}/></button>
        </div>

     </div>
  )
}
