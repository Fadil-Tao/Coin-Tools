import Bannerimg from '../assets/BannerImg.png';
import { Link } from 'react-router-dom';
const HeroBanner = () => {
    return (
        <div className='flex my-10 flex-wrap-reverse '>
            <div className='flex justify-center items-center md:w-1/2'>
                <div className=''>
                    <h1 className='text-[40px] leading-10 font-bold'>
                        Search and Find Crypto Currencies
                    </h1>
                    <p className='text-sm mt-3  text-gray-400'>
                        Providing accurately updated real-time data on various cryptocurrencies, our
                        platform ensures users have access to the latest information, allowing for
                        informed decision-making in the dynamic and ever-changing world of digital
                        currencies.
                    </p>
                    <div className='flex justify-center mt-10 items-baseline'>
                        <ul className='flex  text-lg font-semibold group'>
                            <li className='mx-2 bg-[#01E4D9] group-hover:text-[#01E4D9] border-[1.5px] transition-colors duration-300 ease-in-out border-[#01E4D9] px-6 group-hover:bg-transparent text-[#081945] rounded-md py-1'>
                               <Link to={'/coin'}>Get Started</Link>
                            </li>
                            <li className='mx-2 border-[1.5px] group-hover:bg-[#01E4D9] transition-colors duration-300 ease-in-out group-hover:text-[#081945] border-[#01E4D9] text-[#01E4D9] px-6 py-1 rounded-md'>
                                How it Works
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 md:block '>
                <img src={Bannerimg} alt='Banner Image' className='object-cover w-full h-full' />
            </div>
        </div>
    );
};

export default HeroBanner;
