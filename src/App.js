import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import "./App.css";
import Header from "./components/header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Trending />} /> {/* Use element prop instead of render */}
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
