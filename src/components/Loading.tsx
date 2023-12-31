const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='grid place-items-center gap-y-9'>
                <div className='relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-[#01E4D9] to-blue-500 '>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white'></div>
                </div>
                <h1 className='text-center font-bold text-white text-xl'>
                    Sit Tight While We Get The Data For You{':)'} ...
                </h1>
            </div>
        </div>
    );
};

export default Loading