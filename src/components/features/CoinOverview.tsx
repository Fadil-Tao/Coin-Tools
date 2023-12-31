import { Link } from 'react-router-dom';

type CoinOverviewProps = {
    image: string;
    title: string;
    percentage: number;
    price: number;
    rank: number;
    id:string
};

const CoinOverview = ({ image, title, percentage, price, rank,id }: CoinOverviewProps) => {
    return (
        <Link to={`/coin/${id}`}>
            <div className='border-[1.5px] border-[rgb(1,228,217,0.4)] rounded-lg shadow-neumorphismdark w-48 my-2 text-center font-semibold  grid place-items-center text-xl  h-60'>
                <div className='w-16 h-12 '>
                    <img src={image} alt={title} className='object-cover' />
                </div>
                <div className='flex text-2xl'>
                    <p>
                        {rank}
                        {'#'}
                    </p>
                    <p className='mx-2'>{title}</p>
                </div>
                <div>
                    <p>{price.toFixed(2)} $</p>
                    <p className={percentage > 0 ? 'text-green-500' : 'text-red-500'}>
                        {percentage.toFixed(2)}%
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CoinOverview;
