import { useEffect, useState,lazy, Suspense } from 'react';
import TableShell from './TableShell';
import Columns from './Columns';
import { dataType } from '../../Services/Fetch';
import DebouncedInput from './DebouncedInput';
import Loading from '../Loading';
const ErrorPreview = lazy(()=> import('../ErrorComponent'))


const Table = () => {
    const [data, setData] = useState<dataType[]>([]);
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    useEffect(() => {
        const url: string =
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc';

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(url);
                const item = (await res.json()) as dataType[];
                console.log(item);
                console.log(data);
                setData(item);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(true);
            }
        };
        fetchData();
    }, []);

    if (IsLoading) return <Loading />;
    if (error) return <Suspense fallback={<Loading/>}><ErrorPreview/></Suspense>
    return (
        <div className='w-full pb-10 overflow-x-auto  lg:px-20 '>
            <DebouncedInput
                value={globalFilter ?? ''}
                onChange={(value: number | string) => setGlobalFilter(String(value))}
                className='p-2  bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-[#01E4D9] text-white font-semibold'
                placeholder='Search     Coins...'
            />
            <TableShell columns={Columns} data={data} globalFilter={globalFilter} />
        </div>
    );
};

export default Table;
