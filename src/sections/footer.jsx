import Logo from '../assets/logo.svg'
import twitter from "../assets/Icon/twitter.svg"
import facebook from "../assets/Icon/facebook.svg"
import instagram from "../assets/Icon/instagram.svg"
import linkedin from "../assets/Icon/linkedin.svg"
import youtube from "../assets/Icon/youtube.svg"
import whatsapp from "../assets/Icon/whatsapp.svg"
import telegram from "../assets/Icon/telegram.svg"

const Footer = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center gap-30 mt-30 mb-5'>
        <div className="sec1">
            <img src={Logo} alt="Logo" className='w-40 mt-10' />
            <p className='text-gray-500 text-sm my-5'>© 2010 - 2025, Zerodha Broking Ltd. <br />
                All rights reserved.</p>

            <div className='flex gap-10'>
                <a href=""><img src={twitter} alt="twitter" className='w-5'/></a>
                <a href=""><img src={facebook} alt="facebook" className='w-5'/></a>
                <a href=""><img src={instagram} alt="instagram" className='w-5'/></a>
                <a href=""><img src={linkedin} alt="linkedin" className='w-5'/></a>
            </div>

            <div className='flex gap-10 mt-10'>
                <a href=""><img src={youtube} alt="youtube" className='w-5'/></a>
                <a href=""><img src={whatsapp} alt="whatsapp" className='w-5'/></a>
                <a href=""><img src={telegram} alt="telegram" className='w-5'/></a>
            </div>
        </div>

        <div className="sec2">
            <ul>
                <li className='my-5 text-xl'>Company</li>
                <li className='footerlist'><a href="">About</a></li>
                <li className='footerlist'><a href="">Products</a></li>
                <li className='footerlist'><a href="">Pricing</a></li>
                <li className='footerlist'><a href="">Careers</a></li>
                <li className='footerlist'><a href="">Zerodha.tech</a></li>
                <li className='footerlist'><a href="">Open source</a></li>
                <li className='footerlist'><a href="">Press & media</a></li>
                <li className='footerlist'><a href="">Zerodha Cares (CSR)</a></li>
            </ul>
        </div>

        <div className="sec2">
            <ul>
                <li className='my-5 text-xl'>Support</li>
                <li className='footerlist'><a href="">Contact us</a></li>
                <li className='footerlist'><a href="">Support portal</a></li>
                <li className='footerlist'><a href="">Z-Connect blog</a></li>
                <li className='footerlist'><a href="">List of charges</a></li>
                <li className='footerlist'><a href="">Downloads & resources</a></li>
                <li className='footerlist'><a href="">Videos</a></li>
                <li className='footerlist'><a href="">Market overview</a></li>
                <li className='footerlist'><a href="">How to file a complaint?</a></li>
                <li className='footerlist'><a href="">Status of your complaints</a></li>
            </ul>
        </div>

        <div className="sec3">
            <ul>
                <li className='my-5 text-xl'>Account</li>
                <li className='footerlist'><a href="">Open an account</a></li>
                <li className='footerlist'><a href="">Fund transfer</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer