import arrowright from '../../assets/Icon/arrowright.png'
import education from '../../assets/Home/index-education.svg'

const Marketeducations = () => {
  return (
    <div className='flex justify-center md:flex-row flex-col items-center gap-35 my-32'>
        <div><img src={education} alt="" /></div>
        <div>
            <h3 className='text-3xl font-medium mb-5'>Free and open market education</h3>
            <p>Varsity, the largest online stock market education book in the world <br />
                covering everything from the basics to advanced trading.</p>

            <a href="" className='text-[#0073ff] flex gap-1 my-5'>Varsity <img src={arrowright} alt="arrowright" className='w-5'/></a>

            <p>TradingQ&A, the most active trading and investment community in <br />
                India for all your market related queries.</p>

            <a href="" className='text-[#0073ff] flex gap-1 my-5'>TradingQ&A <img src={arrowright} alt="arrowright" className='w-5'/></a>
        </div>
    </div>
  )
}

export default Marketeducations