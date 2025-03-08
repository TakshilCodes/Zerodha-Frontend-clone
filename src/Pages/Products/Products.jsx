import Landing from "./landing"
import Zerodhauniverse from './zerodhauniverse'
import Displayproducts1 from '../../components/displayproducts1'
import Displayproduct2 from '../../components/displayproduct2'
import KiteImage from '../../assets/Pricing/products-kite.png'
import console from '../../assets/Pricing/products-console.png'
import coinimage from '../../assets/Pricing/products-coin.png'
import kiteconnect from '../../assets/Pricing/products-kiteconnect.png'
import varsity from '../../assets/Pricing/varsity-products.png'

const Products = () => {
  return (
    <div>
        <Landing/>
        <Displayproducts1 
         image={KiteImage}
         head="Kite"
         para="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your
          Android and iOS devices."
         link1="Try demo"
         link2="Learn more"
        />

        <Displayproduct2
        image={console}
        head="Console"
        para="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn more"
        />

        <Displayproducts1 
         image={coinimage}
         head="Coin"
         para="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
         link1="Coin"
        />

        <Displayproduct2
        image={kiteconnect}
        head="Kite Connect API"
        para="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to 
        our clientbase."
        link1="Kite Connect"
        />

        <Displayproducts1 
         image={varsity}
         head="Varsity mobile"
         para="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you 
         learn on the go."
        />

        <Zerodhauniverse/>
    </div>
  )
}

export default Products