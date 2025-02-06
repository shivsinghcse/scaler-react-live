import { Routes, Route, Link } from 'react-router';

function About() {
    return <h2>About Page</h2>;
}
function Home() {
    return <h3>I am Home Page</h3>;
}
function Listing() {
    return <h3>I am Listing Page</h3>;
}

function PageNotFound() {
    return <h3>PageNotFound</h3>;
}

const Routing = () => {
    return (
        <>
            <h1>Routing Example</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/listing">Listing</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/listing" element={<Listing />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Routing;
