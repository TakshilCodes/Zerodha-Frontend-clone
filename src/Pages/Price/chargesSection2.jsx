

const ChargesSection2 = () => {
  return (
    <div>
        <div>
            <h1 className="text-2xl md:w-200 mx-auto my-10">Charges for account opening</h1>

            <div className="w-70 md:w-200 mx-auto border py-0 border-zinc-400">
                <div className="flex justify-between p-3 text-[15px] border-b border-zinc-400"><p>Typle of account</p> <p>Charges</p></div>
                <div className="flex justify-between px-3 my-5 text-[14px] paracolor"><p>Online account</p> <p className="bg-green-600 text-white px-2">FREE</p></div>
                <div className="flex justify-between px-3 my-5 text-[14px] paracolor"><p>Offline account</p> <p className="bg-green-600 text-white px-2">FREE</p></div>
                <div className="flex justify-between px-3 my-5 text-[14px] paracolor"><p>NRI account (offline only)</p> <p>₹ 500</p></div>
                <div className="flex justify-between px-3 my-5 text-[14px] paracolor"><p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p> <p>₹ 500</p></div>
            </div>
        </div>

        <div>
            <h1 className="text-2xl md:w-200 mx-auto my-10">Charges for account opening</h1>

            <div className="w-90 md:w-200 mx-auto border py-0 border-zinc-400">
                <div className="flex justify-between p-3 text-[15px] border-b border-zinc-400"><p>Service</p> <p>Billing Frquency</p> <p>Charges</p></div>
                <div className="flex justify-between flex-col px-3 my-5 text-[14px] paracolor"><p>Tickertape</p> <p>Monthly / Annual</p> <p>Free: 0 | Pro: 249/2399</p></div>
                <div className="flex justify-between flex-col px-3 my-5 text-[14px] paracolor"><p>Smallcase</p> <p>Per transaction</p> <p>Buy & Invest More: 100 | SIP: 10</p></div>
                <div className="flex justify-between flex-col px-3 my-5 text-[14px] paracolor"><p>Kite Connect</p> <p>Monthly</p> <p>Connect: 2000 | Historical: 2000</p></div>
            </div>
        </div>
    </div>
  )
}

export default ChargesSection2