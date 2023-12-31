import { Link } from 'react-router-dom';
import { CiBitcoin } from 'react-icons/ci';
import { useState} from 'react';
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

type navigationType = {
    link: string;
    title: string;
};
const Navigation: navigationType[] = [
    {
        link: '/home',
        title: 'Home',
    },
    {
        link: '/coin',
        title: 'Coins',
    },
 
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);


    return (
        <nav className='flex md:px-20 px-8 top-0 backdrop-blur  sticky bg-transparent backdrop-filter bg-opacity-30 text-white  w-full justify-around md:justify-between items-center py-5'>
            <div>
                <Link to={'/'} className='font-bold flex items-center text-2xl'>
                    <span className='text-[#01E4D9]'>
                        <CiBitcoin />
                    </span>
                    <p> Coint-Tools</p>
                </Link>
            </div>
            <div className='flex md:min-h-fit md:justify-between text-[16px] font-semibold items-baseline '>
                <div className='md:hidden block'>
                    <button
                        className='bg-[#01E4D9] rounded-md p-1 text-white font-bold'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                       {isOpen?<MdOutlineClose/>:<MdMenu/>  } 
                    </button>
                </div>
                <div className={`transition-opacity md:visible md:opacity-100 duration-500 ease-in-out md:block ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <ul className='md:flex md:static fixed  md:justify-start grid place-items-center  backdrop-blur backdrop-filter  '>
                        {Navigation.map((data, key) => (
                            <li key={key} className='mx-2'>
                                <Link to={data.link}>{data.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <ul className='hidden md:flex text-sm group'>
                    <li className='mx-2 border-[1.5px] group-hover:bg-[#01E4D9] transition-colors duration-300 ease-in-out group-hover:text-[#081945] border-[#01E4D9] text-[#01E4D9] px-6 py-1 rounded-md'>
                        Login
                    </li>
                    <li className='mx-2 bg-[#01E4D9] group-hover:text-[#01E4D9] border-[1.5px] transition-colors duration-300 ease-in-out border-[#01E4D9] px-6 group-hover:bg-transparent text-[#081945] rounded-md py-1'>
                        Sign-Up
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
