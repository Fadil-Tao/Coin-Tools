import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <main className=' min-h-screen bg-[#081945]'>
            <Navbar />
            <div className='mt-10 '>
                <Outlet />
            </div>
        </main>
    );
};

export default RootLayout;
