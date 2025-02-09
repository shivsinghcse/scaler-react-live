import { Link } from 'react-router';
import LOGO from '../assets/LOGO.png';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between px-10 shadow-lg py-5 sticky left-0 top-0 bg-white z-10">
            <img src={LOGO} alt="Logo" className="w-14 " />
            <nav>
                <ul className="flex">
                    <li className="mx-5 text-lg font-semibold ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-5 text-lg font-semibold">
                        <Link to="/watchlist">Watchlist</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
