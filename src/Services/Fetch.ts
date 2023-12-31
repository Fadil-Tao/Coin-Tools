export type dataType = {
    id: string;
    market_cap_rank: number;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
};






type Description = { en: string };
type Image = { large?: string };
type CurrentPrice = { usd: number };



export type DetailsType = {
    id: string;
    symbol: string;
    name: string;
    description: Description;
    image: Image;
    market_cap_rank: number;
    market_data: {
        current_price: CurrentPrice;
        price_change_percentage_24h: number;
        price_change_percentage_7d: number;
        price_change_percentage_30d:number
        price_change_percentage_60d:number
        price_change_percentage_200d:number
        price_change_percentage_1y:number
    };
}

