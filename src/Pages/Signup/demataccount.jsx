import demataccountimage from '../../assets/SignUp/steps-acop.svg'
import benefitsimage from '../../assets/SignUp/acop-benefits.svg'

const Demataccount = () => {
    return (
        <div>
            <h1 className="text-4xl text-center mt-15">Steps to open a demat account with Zerodha</h1>
                <div className='Section1 flex flex-col  md:flex-row justify-center items-center gap-10 mt-15'>
                    <img src={demataccountimage} alt="demataccountimage" />
                    <div className='steps'>
                        <div className='flex items-center gap-5 border-b w-90 md:w-110 py-5 border-zinc-300'>
                            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-md">01</div>
                            <p  className='text-xl'>Enter the requested details</p> 
                        </div>
                        <div className='flex items-center gap-5 border-b w-90 md:w-110 py-5 border-zinc-300'>
                            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-md">02</div>
                            <p  className='text-xl'>Complete e-sign & verification</p> 
                        </div>
                        <div className='flex items-center gap-5 border-b w-90 md:w-110 py-5 border-zinc-300'>
                            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-md">03</div>
                            <p  className='text-xl'>Start investing!</p> 
                        </div>
                    </div>
                </div>

                <div className='Section2 flex flex-col md:flex-row justify-center items-center gap-20 my-30'>

                    <div>
                        <img src={benefitsimage} alt="benefitsimage" className='w-90'/>
                        <h1 className='text-3xl mt-5'>Benefits of opening a Zerodha <br />
                            demat account</h1>
                    </div>

                    <div>
                        <div>
                            <h1 className='text-2xl'>Unbeatable pricing</h1>
                            <p className='paracolor text-md my-10'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for <br />
                                intraday and F&O trades.</p>
                        </div>

                        <div>
                            <h1 className='text-2xl'>Best investing experience</h1>
                            <p className='paracolor text-md my-10'>Simple and intuitive trading platform with an easy-to-understand user <br />
                                interface.</p>
                        </div>

                        <div>
                            <h1 className='text-2xl'>No spam or gimmicks</h1>
                            <p className='paracolor text-md my-10'>Committed to transparency — no gimmicks, spam, "gamification", or <br />
                            intrusive push notifications.</p>
                        </div>

                        <div>
                            <h1 className='text-2xl'>The Zerodha universe</h1>
                            <p className='paracolor text-md my-10'>More than just an app — gain free access to the entire ecosystem of <br />
                                our partner products.</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Demataccount