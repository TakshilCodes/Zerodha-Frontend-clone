import langingImage from '../../assets/Home/landing.png'
import Button from '../../components/button'

const Hero = () => {
  return (
    <div className='flex flex-col items-center'>
        <img src={langingImage} alt="Landing Image" className='w-250 mt-50 mb-10'/>
        <p className='text-[#424242] text-5xl font-medium text-center'>Invest in everything</p>
        <p className='text-xl mt-5 text-center'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <Button label="Sign up for free"/>
    </div>
  )
}

export default Hero