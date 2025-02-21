import EcosystemImage from '../../assets/Home/ecosystem.png'
import arrowright from '../../assets/Icon/arrowright.png'
import presslogo from '../../assets/Home/press-logos.png'

const Ecosystem = () => {
  return (<>
    <div className="mt-32 mb-20 flex flex-col md:flex-row justify-center items-center">
        <div>
            <h1 className="text-black text-3xl font-medium">Trust with confidence</h1>
            <div className="sections mt-10">
                <h3 className="text-xl font-medium py-5">Customer-first always</h3>
                <p className="paracolor">That's why 1.5+ crore customers trust Zerodha with <br />
                   ₹4.5+ lakh crores of equity investments and contribute to <br />
                   15% of daily retail exchange volumes in India.</p>
            </div>

            <div className="sections">
                <h3 className="text-xl font-medium py-5">No spam or gimmicks</h3>
                <p className="paracolor">No gimmicks, spam, "gamification", or annoying push <br />
                    notifications. High quality apps that you use at your <br />
                    pace, the way you like.</p>
            </div>

            <div className="sections">
                <h3 className="text-xl font-medium py-5">The Zerodha universe</h3>
                <p className="paracolor">Not just an app, but a whole ecosystem. Our investments <br />
                    in 30+ fintech startups offer you tailored services <br />
                    specific to your needs.</p>
            </div>

            <div className="sections">
                <h3 className="text-xl font-medium py-5">Do better with money</h3>
                <p className="paracolor">With initiatives like Nudge and Kill Switch, we don't just <br /> 
                    facilitate transactions, but actively help you do better <br />
                    with your money.</p>
            </div>
        </div>

        <div>
            <img src={EcosystemImage} alt="EcosystemImage" className='w-90 md:w-170 mt-15 md:mt-0'/>
            <div className='flex gap-10 justify-center'>
                <a href="" className='text-[#0073ff] flex gap-1'>Explore our products <img src={arrowright} alt="arrowright" className='w-5'/></a>
                <a href="" className='text-[#0073ff] flex gap-1'>Try Kite demo <img src={arrowright} alt="arrowright" className='w-5'/></a>
            </div>
        </div>
    </div>

    <div className='mx-auto mb-32 w-80 md:w-180'><img src={presslogo} alt="presslogo"/></div>
  </>)
}

export default Ecosystem