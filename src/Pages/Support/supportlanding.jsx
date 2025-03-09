import searchicon from '../../assets/Icon/search.png';
import supportdata from './supportdata';
import React from 'react';

const SupportLanding = () => {
    return (
        <div className="bg-[#387ED1] text-white pb-10 px-6 md:px-20 mt-20">
            {/* Header Links */}
            <div className='flex justify-center'>
            <div className="flex justify-between w-280 gap-10 text-xl pt-20">
                <a href="#" className="hover:text-[#f1f1f1]">Support Portal</a>
                <a href="#" className="border-b hover:text-[#f1f1f1]">Track tickets</a>
            </div>
            </div>

            {/* Search & Links */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-10 gap-10 md:gap-20 mr-35">
                <div className="flex flex-col md:text-left">
                    <h1 className="text-xl max-w-lg py-4 w-100 ml-40 md:ml-10">
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <div className='bg-white py-3 px-4 flex items-center gap-3 w-90 md:w-full md:[w-500px] rounded-md ml-40 md:ml-10'>
                        <input 
                            type="text" 
                            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                            className='text-gray-900 focus:outline-none w-full text-md '
                        />
                        <img src={searchicon} alt="Search" className='w-5 cursor-pointer' />
                    </div>

                    {/* Head Links */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 text-sm ml-50 md:ml-10 w-fit'>
                        {supportdata.headlinks.map((headlink, index) => (
                            <a key={index} href="#" className='border-b hover:text-gray-200'>{headlink}</a>
                        ))}
                    </div>
                </div>

                {/* Featured Section */}
                <div>
                    <h1 className='text-2xl my-5'>Featured</h1>
                    <ol className='w-full'>
                        <li className='my-2 border-b py-2'>1. BSE StAR mutual fund platform downtime</li>
                        <li className='border-b py-2'>2. Surveillance measure on scrips - March 2025</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default SupportLanding;
