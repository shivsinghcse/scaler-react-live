import Navbar from './Components/Navbar';
import Home from './Components/Home';
import WatchList from './Components/WatchList';
import { Routes, Route } from 'react-router';

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/watchlist" element={<WatchList />} />
                <Route path="*" element={<h1>Page Not Found...</h1>} />
            </Routes>
        </>
    );
}

export default App;
