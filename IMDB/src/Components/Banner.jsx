import axios from 'axios';
import { useEffect, useState } from 'react';
const Banner = () => {
    const [bannerImage, setBannerImage] = useState('');
    const [bannerTitle, setBannerTitle] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const resp = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=59651246c3721f05bf8ed927e7cb6110&language=en-US&page=1`
        );
        const data = await resp.json();
        setBannerImage(data.results[0].backdrop_path);
        setBannerTitle(data.results[0].title);

        // console.log(data.results);
    };
    return (
        <>
            <div
                className="h-[30vh] w-[95%] mx-auto mt-5 bg-cover bg-center flex items-end"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${bannerImage})`,
                }}
            >
                <div className="text-white w-full text-center text-2xl font-semibold">
                    {bannerTitle}
                </div>
            </div>
        </>
    );
};

export default Banner;
