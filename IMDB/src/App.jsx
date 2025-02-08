import Navbar from './components/Navbar';
import Home from './components/Home';
import WatchList from './components/WatchList';
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
