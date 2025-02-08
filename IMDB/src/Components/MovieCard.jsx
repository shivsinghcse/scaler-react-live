const MovieCard = ({ title, url }) => {
    // console.log(url, title);

    return (
        <>
            <div
                style={{ backgroundImage: `url(${url})` }}
                className="w-40 h-48 bg-cover bg-center flex  items-end justify-center gap-10 hover:cursor-pointer rounded-xl hover:scale-110 duration-300"
            >
                <div className="text-white text-lg font-semibold">{title}</div>
            </div>
        </>
    );
};

export default MovieCard;
