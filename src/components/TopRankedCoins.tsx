import { useEffect, useState,Suspense,lazy } from 'react';
import { dataType } from '../Services/Fetch';
import CoinOverview from './features/CoinOverview';
import Loading from './Loading';

const ErrorPreview = lazy(()=> import('./ErrorComponent')) 

const TopRankedCoins = () => {
    const [data, setData] = useState<dataType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error,setError] = useState<boolean>(false)

    useEffect(() => {
        const url: string =
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5';
        const fetchData = async () => {
            setIsLoading(true)
            try {
                
                const res = await fetch(url);
                const item = (await res.json()) as dataType[];
                setData(item);
                setIsLoading(false);
            } catch (error) {
                setError(true)
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <Loading/> 
    if(error) return <Suspense fallback={<Loading/>}><ErrorPreview/></Suspense>
    return (
        <div className='pb-20'>
            <h2 className='text-white font-bold text-center text-xl my-2'>Top Coins on Market</h2>
            <ul className='flex flex-wrap justify-center items-center'>
                {data.map((item, key) => {
                    return (
                        <li className='md:mx-3' key={key}>
                            <CoinOverview
                                image={item.image}
                                title={item.name}
                                percentage={item.price_change_percentage_24h}
                                price={item.current_price}
                                rank={item.market_cap_rank}
                                id={item.id}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TopRankedCoins;
