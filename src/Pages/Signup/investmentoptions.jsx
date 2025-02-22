import Stockimage from '../../assets/SignUp/stocks-acop.svg'
import mutalfundsimage from '../../assets/SignUp/mf-acop.svg'
import ipoimage from '../../assets/SignUp/ipo-acop.svg'
import futuresimage from '../../assets/SignUp/fo-acop.svg'
import Button from '../../components/button'

const Investmentoptions = () => {
    return (
        <div className="mt-43 w-full flex flex-col items-center">
            <h1 className="text-3xl font-medium text-center">
                Investment options with Zerodha demat account
            </h1>

            <div className="grid lg:grid-cols-2 gap-x-3 gap-y-15 mt-20 w-100% lg:w-[45%]">

                <div className="flex gap-6 items-center">
                    <img src={Stockimage} alt="Stocks" className="w-24" />
                    <div>
                        <h3 className="text-2xl">Stocks</h3>
                        <p className="text-md paracolor mt-2">Invest in all exchange-listed securities</p>
                    </div>
                </div>

                <div className="flex gap-6 items-center">
                    <img src={mutalfundsimage} alt="Mutual Funds" className="w-24" />
                    <div>
                        <h3 className="text-2xl">Mutual Funds</h3>
                        <p className="text-md paracolor mt-2">Invest in commission-free direct mutual funds</p>
                    </div>
                </div>

                <div className="flex gap-6 items-center">
                    <img src={ipoimage} alt="IPOs" className="w-24" />
                    <div>
                        <h3 className="text-2xl">IPO</h3>
                        <p className="text-md paracolor mt-2">Apply to the latest IPOs instantly via UPI</p>
                    </div>
                </div>

                <div className="flex gap-6 items-center">
                    <img src={futuresimage} alt="Futures & Options" className="w-24" />
                    <div>
                        <h3 className="text-2xl">Futures & Options</h3>
                        <p className="text-md paracolor mt-2">Hedge and mitigate market risk through simplified F&O trading</p>
                    </div>
                </div>
            </div>

            <div className='my-10'><Button label="Explore Investments" /></div>
        </div>
    );
};

export default Investmentoptions;
