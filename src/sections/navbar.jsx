import { useState } from 'react';
import Logo from '../assets/logo.svg';
import menuopen from '../assets/Icon/menu.png';
import menuclose from '../assets/Icon/close.png';
import kiteLogo from '../assets/Menu/kite-logo.svg';
import consolelogo from '../assets/Menu/console.svg';
import kiteConnectLogo from '../assets/Menu/kite-connect.svg';
import coinLogo from '../assets/Menu/coin.svg';
import Varsitylogo from '../assets/Menu/varsity.png';
import TradingQAlogo from '../assets/Menu/tqna.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Manage menu open/closed state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu state
  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className='flex justify-between md:justify-center items-center gap-[25%] py-6 text-[#666666] shadow-sm fixed top-0 left-0 w-full bg-white z-50'>
        <div>
          <Link to="/"><img src={Logo} alt="Logo" className='w-35' /></Link>
        </div>
        <div>
          <div className="hidden md:flex items-center gap-10">
            <Link to="/Signup" className='hover:text-[#387ED1]'>Signup</Link>
            <Link to="/About" className='hover:text-[#387ED1]'>About</Link>
            <Link to="/Product" className='hover:text-[#387ED1]'>Products</Link>
            <Link to="/Pricing" className='hover:text-[#387ED1]'>Pricing</Link>
            <Link to="/Support" className='hover:text-[#387ED1]'>Support</Link>
            <button className='cursor-pointer' onClick={handleMenuClick}>
              <img src={isMenuOpen ? menuclose : menuopen} alt="Menu" className='w-7' />
            </button>
          </div>
          <button className='cursor-pointer block md:hidden' onClick={handleMenuClick}>
            <img src={isMenuOpen ? menuclose : menuopen} alt="Menu" className='w-7' />
          </button>
          <div className={`bg-white mt-5 shadow-md absolute right-0 md:right-60 flex-col ${isMenuOpen ? 'flex' : 'hidden'}`}>
            {/* Menu links and content */}
            <div className="flex items-center gap-5 text-nd p-5 justify-center md:hidden">
            <Link to="/Signup" className='hover:text-[#387ED1]'>Signup</Link>
            <Link to="/About" className='hover:text-[#387ED1]'>About</Link>
            <Link to="/Product" className='hover:text-[#387ED1]'>Products</Link>
            <Link to="/Pricing" className='hover:text-[#387ED1]'>Pricing</Link>
            <Link to="/Support" className='hover:text-[#387ED1]'>Support</Link>
            </div>
            <div className='menu1 md:flex flex-row gap-1 md:gap-30 md:p-5 my-10 md:my-0'>
              <div className="platforms">
                <img src={kiteLogo} alt="Kite Logo" className='w-15' />
                <p className='text-md text-black'>Kite</p>
                <p className='ToRemove text-[10px] text-gray-400'>Trading platform</p>
              </div>
              <div className="platforms">
                <img src={consolelogo} alt="Console Logo" className='w-15' />
                <p className='text-md text-black'>Console</p>
                <p className='ToRemove text-[10px] text-gray-400'>Backoffice</p>
              </div>
              <div className="platforms">
                <img src={kiteConnectLogo} alt="Kite Connect Logo" className='w-15' />
                <p className='text-md text-black'>Kite Connect</p>
                <p className='ToRemove text-[10px] text-gray-400'>Trading APIs</p>
              </div>
              <div className="platforms">
                <img src={coinLogo} alt="Coin Logo" className='w-15' />
                <p className='text-md text-black'>Coin</p>
                <p className='ToRemove text-[10px] text-gray-400'>Mutal funds</p>
              </div>
              <div className="platform flex justify-center items-center md:hidden mt-3">
                <img src={Varsitylogo} alt="Varsity Logo" className='w-10 mr-5' />
                <p className='text-md text-black'>Varsity</p>
              </div>
              <div className="platform flex justify-center items-center md:hidden mt-4">
                <img src={TradingQAlogo} alt="Trading Q&A Logo" className='w-15' />
                <p className='text-md text-black'>Trading Q&A</p>
              </div>
            </div>
            <div className='menu2 bg-gray-50 flex flex-row justify-center gap-15'>
              <div className="lists">
                <ul className='list-none text-md flex flex-col'>
                  <li className='text-black font-medium my-4'>Utilities</li>
                  <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Brokerage calculator</a></li>
                  <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Margin calculator</a></li>
                  <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Holiday calculator</a></li>
                  <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Markets</a></li>
                </ul>
              </div>
              <div className="lists">
                <ul className='list-none text-md flex flex-col'>
                  <li className='text-black font-medium my-4'>Updates</li>
                  <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Z-Connect blog</a></li>
                  <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Pluse News</a></li>
                  <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Circulas/Bullentin</a></li>
                  <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>IPOs</a></li>
                </ul>
              </div>
              <div className="lists hidden md:flex flex-col items-center md:items-start">
                <ul className='list-none text-md'>
                  <li className='text-black font-medium my-4'>Education</li>
                </ul>
                <div className='flex gap-10 justify-center p-5'>
                  <div className='flex flex-col items-center'>
                    <a href="" className='hover:text-[#387ED1]'>
                      <img src={Varsitylogo} alt="Varsity Logo" />
                    </a>
                    <p className='cursor-pointer pt-3 hover:text-[#387ED1]'>Varsity</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <a href="" className='hover:text-[#387ED1]'>
                      <img src={TradingQAlogo} alt="Trading Q&A Logo" />
                    </a>
                    <p className='cursor-pointer pt-3 hover:text-[#387ED1]'>Trading Q&A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
