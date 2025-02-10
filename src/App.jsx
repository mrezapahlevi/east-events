import "./App.css";
import Categories from "./pages/Categories/Categories";
import FeaturedPage from "./pages/Featured/FeaturedPage";
import HeroPage from "./pages/Hero/HeroPage";
import NavbarPage from "./pages/Navbar/NavbarPage";
import TopArtis from "./pages/TopArtist/TopArtis";
import TopEvents from "./pages/TopEvents/TopEvents";
import TrendingPage from "./pages/Trending/TrendingPage";

function App() {
  return (
    <div className="">
      <NavbarPage />
      <HeroPage />
      <FeaturedPage />
      <Categories />
      <TrendingPage />
      <TopArtis />
      <TopEvents />
    </div>
  );
}

export default App;
