const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-[#081945]'>
            <div>
                <h1 className=" font-extrabold text-white text-4xl">
                    Ooops Something Wrong Happens its either the network or your hand screwed up the
                    url parameters
                </h1>
            </div>
        </div>
    );
};

export default ErrorPage
