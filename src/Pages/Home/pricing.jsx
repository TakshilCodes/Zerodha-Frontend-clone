import arrowright from '../../assets/Icon/arrowright.png'
import price1 from '../../assets/Home/pricing-eq.svg'
import price2 from '../../assets/Home/other-trades.svg'

const Pricing = () => {
  return (
      <div className='flex justify-center md:flex-row flex-col items-center gap-10'>
          <div>
            <h1 className="text-black text-3xl font-medium my-5">Unbeatable pricing</h1>
            <p>We pioneered the concept of discount broking and price <br />
              transparency in India. Flat fees and no hidden charges.</p>
            <a href="" className='text-[#0073ff] flex gap-1 my-5'>See pricing <img src={arrowright} alt="arrowright" className='w-5'/></a>
          </div>
          <div className='flex md:flex-row flex-col'>
            <div className="price1 flex items-center">
              <img src={price1} alt="price1logo" className='w-30'/>
              <p className='text-sm text-gray-500'>Free account <br />
              opening</p>
            </div>

            <div className="price1 flex items-center">
              <img src={price2} alt="price1logo" className='w-30'/>
              <p className='text-sm text-gray-500'>Free equity delivery <br />
                and direct mutual funds</p>
            </div>

            <div className="price1 flex items-center">
              <img src={price2} alt="price1logo" className='w-30'/>
              <p className='text-sm text-gray-500'> Intraday and <br />
                F&O</p>
            </div>
          </div>
      </div>
  )
}

export default Pricing