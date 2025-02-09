import MovieCard from './MovieCard';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

const Movies = () => {
    const [pageNo, setPageNo] = useState(1);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [pageNo]);

    const fetchData = async () => {
        const resp = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=59651246c3721f05bf8ed927e7cb6110&language=en-US&page=${pageNo}`
        );
        const data = await resp.json();
        setTrendingMovies(data.results);
        // console.log(data.results);
    };

    const handlePrevious = () => {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    };
    const handleNext = () => {
        if (pageNo < trendingMovies.length) setPageNo(pageNo + 1);
    };

    console.log(watchList);
    const addToWatchList = (movie) => {
        console.log(movie);
        

        const updatedMovies = [...watchList, movie];
        setWatchList(updatedMovies);
        console.log(watchList);
    };
    const removeFromWatchList = (movie) => {
        const filteredMovies = watchList.filter((watchListMovie) => {
            return movie.id !== watchListMovie.id;
        });
        setWatchList(filteredMovies);
    };

    return (
        <>
            <h1 className="text-center my-12 text-3xl font-bold underline">
                Trending Movies
            </h1>
            <div className="flex flex-wrap gap-10 justify-center my-12">
                {trendingMovies.map((movie) => {
                    return (
                        <MovieCard
                            movie={movie}
                            key={movie.id}
                            addToWatchList={addToWatchList}
                            removeFromWatchList={removeFromWatchList}
                            watchList={watchList}
                            id={movie.id}
                        />
                    );
                })}
            </div>
            <Pagination
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                pageNo={pageNo}
            />
        </>
    );
};

export default Movies;

// API KEY : 59651246c3721f05bf8ed927e7cb6110

// url 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'

// IMG CDN : https://image.tmdb.org/t/p/original
