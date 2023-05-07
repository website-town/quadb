import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
// import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
          {/* <Navbar />  */}
            <Routes>
                <Route index element={<Home />}></Route>
                <Route exact path="movie/:id" element={<Movie />}></Route>
                <Route exact path="movies/:type" element={<MovieList />}></Route>
                <Route exact path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;