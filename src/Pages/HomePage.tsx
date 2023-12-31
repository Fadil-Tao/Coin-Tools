import HeroBanner from "../components/HeroBanner";
import TopRankedCoins from "../components/TopRankedCoins";

const HomePage = () => {
    return (
        <div className='flex md:px-20 px-8 justify-center items-center text-white'>
            <div>
                <HeroBanner/>
                <div className="flex justify-center">
                    <TopRankedCoins/>
                </div>
            </div>
            
        </div>
    );
};

export default HomePage;
