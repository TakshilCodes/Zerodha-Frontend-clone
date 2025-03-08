import ProductsData from './productsdata'
import Button from '../../components/button'

const Zerodhauniverse = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
        <p className='flex gap-1 text-xl justify-center mt-20'>Want to know more about our technology stack? Check out the 
            <a href="" className="text-[#387ED1] flex items-center"> Zerodha.tech </a> blog.</p>

        <h1 className='text-4xl mt-30'>The Zerodha Universe</h1>
        <p className='paracolor my-10'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-20'>
            {ProductsData.map((proddata) => (
              <div key={proddata.id} className=''>
                <a href="" className='flex justify-center flex-col items-center gap-5'>
                  <img src={proddata.image} alt="image" className='w-50'/>
                  <p className='w-60 text-center text-[12px] paracolor '>{proddata.description}</p>
                </a>
              </div>
            ) )}
        </div>

        <div className='mt-10'><Button label="Sign up for free"/></div>
    </div>
  )
}

export default Zerodhauniverse