import rightarrow from '../assets/Icon/arrowright.png'

const Displayproduct2 = ({head,para,link1,image}) => {
  return (
    <div className='flex md:flex-row flex-col justify-center gap-30 items-center mt-30'>
        <div>
            <h1 className='text-3xl'>{head}</h1>
            <p className='text-md paracolor w-90 my-5'>{para}</p>
            <a href="" className="text-[#387ED1] flex items-center">{link1} <img src={rightarrow} alt="rightarrow" className='w-5 h-4' /> </a>
        </div>
        
        <div>
            <img src={image} alt="image" className='hover:opacity-70 hover:cursor-pointer' />
        </div>
    </div>
  )
}

export default Displayproduct2