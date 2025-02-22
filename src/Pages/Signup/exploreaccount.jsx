import individualimage from '../../assets/SignUp/account-types/acop-individual.svg'
import hufimage from '../../assets/SignUp/account-types/acop-huf.svg'
import nriimage from '../../assets/SignUp/account-types/acop-nri.svg'
import minor from '../../assets/SignUp/account-types/acop-minor.svg'
import corporateimage from '../../assets/SignUp/account-types/acop-corporate.svg'

const Exploreaccount = () => {
    return (
        <div className="mt-10">
            <h1 className=" text-center text-4xl font-semibold text-gray-800">Explore different account types</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-20 mt-12 w-[60%] mx-auto justify-center">
                {[
                    { title: "Individual Account", desc: "Invest in equity, mutual funds and derivatives", img: individualimage },
                    { title: "HUF Account", desc: "Make tax-efficient investments for your family", img: hufimage },
                    { title: "NRI Account", desc: "Invest in equity, mutual funds, debentures, and more", img: nriimage },
                    { title: "Minor Account", desc: "Teach your little ones about money & invest for their future with them", img: minor },
                    { title: "Corporate / LLP/ Partnership", desc: "Manage your business surplus and investments easily", img: corporateimage },
                ].map((item, index) => (
                    <a href="#" key={index}>
                        <div className="relative border border-gray-200 bg-white hover:border-[#387ED1] p-5 w-90 rounded-sm transition">

                            <div className="absolute -left-5 bg-white p-2 rounded-full shadow-sm">
                                <img src={item.img} alt="icon" className="w-7 h-7" />
                            </div>

                            <div className='ml-5'>
                                <p className="text-lg text-gray-800">{item.title}</p>
                                <p className="text-gray-500 mt-6">{item.desc}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>


    )
}

export default Exploreaccount