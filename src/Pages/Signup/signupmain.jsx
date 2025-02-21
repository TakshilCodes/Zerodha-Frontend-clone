import { useState } from "react";
import Signuplanding from "../../assets/SignUp/Signuplanding.svg";
import Button from "../../components/button";
import Indianflag from "../../assets/SignUp/india.png"

const Signupmain = () => {
    const [onfocus, setOnFocus] = useState(false);

    return (
        <div className="mt-40" onClick={() => setOnFocus(false)}>
            <h1 className="text-center text-[44px]">
                Open a free demat and trading account online
            </h1>
            <p className="text-[20px] text-center mt-3 paracolor">
                Start investing brokerage free and join a community of 1.5+ crore investors and traders
            </p>
            <div className="flex md:flex-row flex-col justify-center gap-10 my-20">
                <img src={Signuplanding} alt="Signuplanding" className="w-140" />
                <div>
                    <h2 className="text-4xl">Signup now</h2>
                    <p className="text-md mt-3 paracolor">
                        Or track your existing application
                    </p>
                    <div
                        className={`mt-3 border ${onfocus ? "border-2 border-black" : "border-gray-300"} w-fit flex`}
                        onClick={(e) => e.stopPropagation()} // Prevents parent div click
                    >
                        <label className="text-xl border-r border-gray-300 p-1 flex"><img src={Indianflag} alt="Indianflag" className="w-7"/>+91</label>
                        <input
                            onFocus={() => setOnFocus(true)}
                            className="p-1 text-xl outline-0 w-80"
                            type="number"
                            placeholder="Your 10-digit mobile number"
                        />
                    </div>

                    <p className="paracolor text-sm mt-1">You will receive an OTP on your number</p>

                    <Button label="continue"/><br />

                    <a href="" className="text-[#0073ff] text-[13px] font-600 mt-10">Want to open an NRI account?</a>

                    <p className="text-[13px] font-600 mt-4">By proceeding, you agree to the Zerodha  
                        <a href="" className="text-[13px] font-600 text-[#0073ff]"> terms & privacy <br />
                        policy</a></p>
                </div>
            </div>
        </div>
    );
};

export default Signupmain;
