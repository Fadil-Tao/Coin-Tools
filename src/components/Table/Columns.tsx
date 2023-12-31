import { ColumnDef } from '@tanstack/react-table';
import { dataType } from '../../Services/Fetch';
import { Link } from 'react-router-dom';
const Columns: ColumnDef<dataType, any>[] = [
    {
        header: 'Rank',
        accessorKey: 'market_cap_rank',
        cell: (info) => <span className='flex justify-center items-center text-lg '>{info.getValue()}</span>,
    },
    {
        header: 'Coins',
        accessorKey: 'image',
        cell: ({ row }) => (
            <Link to={`${row.original.id}`}>
                <div className='flex px-20 '>
                    <div className='flex justify-center items-center '>
                        <div className='w-16 h-16'>
                            <img src={row.original.image} className='object-cover' />
                        </div>
                    </div>
                    <div className='text-2xl mx-10'>
                        <p >{row.original.name}</p>
                        <p className=' text-gray-600'>{row.original.symbol}</p>
                    </div>
                </div>
            </Link>
        ),
    },
    {
        header: 'Current Price',
        accessorKey: 'current_price',
        cell: (info) => (
            <div >
                <p className='text-center'>{'$'} {info.getValue().toFixed(2)}</p>
            </div>
        ),
    },
    {
        header: 'Last 24 Hours Change',
        accessorKey: 'price_change_percentage_24h',
        cell: (info) => (
            <span
                className={`flex justify-center items-center ${
                    info.getValue() > 0 ? 'text-green-400' : 'text-red-500'
                }`}
            >
               {info.getValue().toFixed(2)} {'%'} 
            </span>
        ),
    },
];

export default Columns;
