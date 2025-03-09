import googlepay from '../assets/Pricing/googlepay.svg'
import applepay from '../assets/Pricing/appstore.svg'
import rightarrow from '../assets/Icon/arrowright.png'

const Displayproducts1 = ({ image, head, para, link1, link2 }) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-30 mt-30'>
      <div>
        <img src={image} alt="image" className='hover:opacity-70 hover:cursor-pointer'/>
      </div>
      <div>
        <h1 className='text-3xl'>{head}</h1>
        <p className='w-90 my-5 paracolor'>{para}</p>
          <div className='flex gap-20 my-5'>
            {link1 ? <a href="" className="text-[#387ED1] flex items-center">{link1} <img src={rightarrow} alt="rightarrow" className='w-5 h-4' /> </a>  : null}
            {link2 ? <a href="" className="text-[#387ED1] flex items-center">{link2} <img src={rightarrow} alt="rightarrow" className='w-5 h-4' /> </a> : null}
          </div>

          <div className='flex gap-5 '>
            <img src={googlepay} alt="googlepay" />
            <img src={applepay} alt="applepay" />
          </div>
      </div>
    </div>
  )
}

export default Displayproducts1