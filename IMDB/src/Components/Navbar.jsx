import {Link} from 'react-router';

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 shadow-lg py-5'>
        <img src="https://m.media-amazon.com/images/G/01/imdb/images-ANDW73HA/favicon_desktop_32x32._CB1582158068_.png" alt='Logo' className='w-10 '/>
        <nav>
            <ul className='flex'>
                <li className='mx-5 text-lg font-semibold '>
                    <Link to='/'>Home</Link>
                </li>
                <li className='mx-5 text-lg font-semibold'>
                    <Link to='/watchlist'>Watchlist</Link>
                </li>
               
            </ul>
        </nav>
    </div>
    
  )
}

export default Navbar