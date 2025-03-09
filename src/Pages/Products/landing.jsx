import rightarrow from '../../assets/Icon/arrowright.png'

const Landing = () => {
  return (
    <div className="text-center mx-auto mt-40 border-b border-zinc-200 md:w-300">
        <h1 className="text-2xl md:text-5xl font-medium my-5">Zerodha Products</h1>
        <p className="text-sm md:text-xl my-5">Sleek, modern, and intuitive trading platforms</p>
        <p className="mt-5 mb-40 flex gap-1 justify-center">Check out our <a href="" className="text-[#387ED1] flex items-center">investment offering 
            <img src={rightarrow} alt="rightarrow" className='w-5 h-4' /></a></p>
    </div>
  )
}

export default Landing