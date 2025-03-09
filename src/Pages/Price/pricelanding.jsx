import price1 from '../../assets/Home/pricing-eq.svg'
import price2 from '../../assets/Home/other-trades.svg'

const Pricelanding = () => {
  return (
    <div>
        <div className="flex justify-center flex-col items-center">
            <h1 className="text-5xl">Charges</h1>
            <p className="text-xl paracolor my-5">List of all charges and taxes</p>
        </div>

        <div className='flex justify-center md:flex-row flex-col gap-10 mt-40'>
            <div className='flex justify-center flex-col items-center'>
                <img src={price1} alt="image" className='w-60'/>
                <h1 className='text-3xl my-5'>Free equity delivery</h1>
                <p className='w-90 text-center paracolor'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>

            <div className='flex justify-center flex-col items-center'>
                <img src={price2} alt="image" className='w-60'/>
                <h1 className='text-3xl my-5'>Intraday and F&O trades</h1>
                <p className='w-90 text-center paracolor'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>

            <div className='flex justify-center flex-col items-center'>
                <img src={price1} alt="image" className='w-60'/>
                <h1 className='text-3xl my-5'>Free direct MF</h1>
                <p className='w-90 text-center paracolor'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
  )
}

export default Pricelanding