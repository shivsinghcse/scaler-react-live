const MovieCard = ({
    movie,
    addToWatchList,
    watchList,
    removeFromWatchList,
}) => {
    // console.log(poster_path, title);
    // console.log(movie);

    const isMovieAdded = (movie) => {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === movie.id) {
                return true;
            }
        }
        return false;
    };
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                }}
                className="w-40 h-48 bg-cover bg-center flex  items-end justify-center gap-10 hover:cursor-pointer rounded-xl hover:scale-110 duration-300"
            >
                <div
                    title={movie.title}
                    className=" text-center  text-white bg-black/60 w-full text-lg font-semibold"
                >
                    <div>
                        {isMovieAdded(movie) == true ? (
                            <i onClick={() => removeFromWatchList(movie)}>✅</i>
                        ) : (
                            <i
                                className="fa fa-add mx-6 border-2"
                                onClick={() => {
                                    addToWatchList(movie);
                                }}
                            ></i>
                        )}
                    </div>
                    {movie.title}
                </div>
            </div>
        </>
    );
};

export default MovieCard;
