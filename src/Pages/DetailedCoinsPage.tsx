import { useEffect, useState } from 'react';
import { DetailsType } from '../Services/Fetch';
import { useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const ErrorPreview = lazy(() => import('../components/ErrorComponent'));

import Loading from '../components/Loading';

const PricesChanges: string[] = ['24h', '7d', '30d', '60d', '200d', '1y'];

const getTimeLabel = (interval: string) => {
    return `Last ${interval}`;
};

const DetailedCoinsPage = () => {
    const [data, setData] = useState<DetailsType>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    let { id } = useParams();
    useEffect(() => {
        const url: string = `https://api.coingecko.com/api/v3/coins/${id}`;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                const item = (await res.json()) as DetailsType;
                setData(item);
                console.log(data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(true);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <Loading />;
    if (error)
        return (
            <Suspense fallback={<Loading />}>
                <ErrorPreview />
            </Suspense>
        );

    return (
        <div className='text-white flex-col flex md:flex-row  md:flex-wrap md:px-20 px-5'>
            <div className='md:w-1/2  grid place-content-center'>
                <img src={data?.image.large} alt='Image' className='object-cover' />
                <figcaption className='text-center '>
                    {'Rank : '}
                    {data?.market_cap_rank}
                </figcaption>
            </div>
            <div className='md:w-1/2'>
                <div className='flex justify-around'>
                    <div>
                        <h1>
                            {'Name : '}
                            {data?.name}
                        </h1>
                    </div>
                    <div>
                        <p>
                            {'Price : '}
                            {data?.market_data.current_price.usd}
                        </p>
                    </div>
                </div>
                <div className=' h-[250px] text-justify overflow-y-auto  '>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: data?.description.en || 'Failed To Get Data :(',
                        }}
                    ></p>
                </div>
                <div>
                    <ul
                        className={`text-xl text-center my-10 text-white flex flex-wrap justify-center `}
                    >
                        {PricesChanges.map((interval, index) => {
                            const percentage = data?.market_data[
                                `price_change_percentage_${interval}` as keyof typeof data.market_data
                            ] as number;

                            return (
                                <li className='mx-5 my-2' key={index}>
                                    <p>{getTimeLabel(interval)}</p>
                                    <p
                                        className={`font-semibold  ${
                                            percentage > 0 ? 'text-green-500' : 'text-red-500'
                                        }`}
                                    >
                                        {percentage}
                                        {' %'}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DetailedCoinsPage;
