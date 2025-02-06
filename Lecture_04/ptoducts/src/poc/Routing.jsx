import { useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route, Link, useParams } from 'react-router';

function About() {
    return <h2>About Page</h2>;
}
function Home() {
    return <h3>I am Home Page</h3>;
}
function Listing() {
    return <h3>I am Listing Page</h3>;
}

function Users(props) {
    // console.log(props.isAdmin);

    const { userId } = useParams();
    // console.log(userId);

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function APICall() {
            const resp = await fetch(
                `https://fakestoreapi.com/users/${userId}`
            );
            const data = await resp.json();
            setUser(data);
            // console.log(data);
        }

        APICall();
    }, []);
    // console.log(user);
    return (
        <>
            {user === null ? (
                <h3>Data Loading....</h3>
            ) : (
                <>
                    <h2>User First Name : {user.name.firstname}</h2>
                    <h2>User Last Name : {user.name.lastname}</h2>
                    <h2>User Email: {user.email}</h2>
                </>
            )}
        </>
    );
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
                    <li>
                        <Link to="/users/1">Users</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/listing" element={<Listing />} />
                <Route
                    path="/users/:userId"
                    element={<Users isAdmin={true}></Users>}
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
};

export default Routing;
