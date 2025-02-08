import MovieCard from './MovieCard';
import { useState } from 'react';
import Pagination from './Pagination';

const Movies = () => {
    const [pageNo, setPageNo] = useState(1);
    const movieObj = [
        {
            url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
            title: 'Movie 1',
        },
        {
            url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
            title: 'Movie 2',
        },
        {
            url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
            title: 'Movie 3',
        },
        {
            url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
            title: 'Movie 4',
        },
        {
            url: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
            title: 'Movie 5',
        },
    ];

    const handlePrevious = () => {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    };
    const handleNext = () => {
        if (pageNo < movieObj.length) setPageNo(pageNo + 1);
    };

    return (
        <>
            <h1 className="text-center my-12 text-3xl font-bold underline">
                Trending Movies
            </h1>
            <div className="flex flex-wrap gap-10 justify-evenly my-12">
                {movieObj.map((movie, index) => {
                    return <MovieCard {...movie} key={index} />;
                })}
            </div>
            <Pagination handleNext = {handleNext} handlePrevious={handlePrevious} pageNo={pageNo}/>
        </>
    );
};

export default Movies;
