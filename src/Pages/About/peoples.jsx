import { useState } from 'react';
import nitinkamat from '../../assets/About/nithin-kamath.jpg'
import downarrow from '../../assets/Icon/down-arrow.png';
import uparrow from '../../assets/Icon/up-arrow.png';
import peoples from './data';

const Peoples = () => {
  const [openBios, setOpenBios] = useState({}); // Store open bios as an object

  const handleClick = (id) => {
    setOpenBios((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the bio for each person
    }));
  };

  return (
    <>
      <div>
        <h1 className='text-4xl my-10 text-center'>People</h1>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-20'>
          <div className='flex flex-col items-center'>
            <img src={nitinkamat} alt="nitinkamat" className='rounded-full w-65 h-65' />
            <p className='text-xl mt-4'>Nithin Kamath</p>
            <p className='paracolor mt-4'>Founder, CEO</p>
          </div>

          <div className='w-full md:w-120 text-[15px]'>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. <br /> <br />

              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). <br /> <br />

              Playing basketball is his zen.</p><br />
            <p>Connect on <a href="" className="text-[#387ED1] hover:text-black">Homepage </a>/ <a href="" className="text-[#387ED1] hover:text-black">TradingQnA </a>/ <a href="" className="text-[#387ED1] hover:text-black">Twitter</a></p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 mx-auto w-[55%] gap-10">
          {peoples.map((people) => (
            <div key={people.id} className="flex flex-col items-center relative h-auto">
              {/* Profile Image */}
              <img className="rounded-full w-55 h-55" src={people.img} alt={people.name} />

              {/* Name & Position */}
              <p className="text-xl pt-2">{people.name}</p>
              <p className="text-sm paracolor">{people.position}</p>

              {/* Bio Toggle Button */}
              <div onClick={() => handleClick(people.id)} className="pt-2 cursor-pointer flex gap-2 items-center text-sm">
                Bio <img className="w-3 h-3" src={openBios[people.id] ? uparrow : downarrow} alt="arrow" />
              </div>

              {/* Bio Content - Fixed position below */}
              <div className={`w-60 paracolor mt-10 overflow-hidden 
                          ${openBios[people.id] ? "max-h-[300px]" : "max-h-0 opacity-0"} `}>
                <p>{people.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Peoples;
