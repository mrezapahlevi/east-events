import Button from "../../components/Button/Button";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./Hero.css";

function HeroPage() {
  return (
    <div id="hero">
      <Slideshow />
      <div className="hero-content container">
        <h1>FIND YOUR NEXT EVENTS.</h1>
        <Button data="Browse Events" size={25} />
      </div>
    </div>
  );
}

export default HeroPage;
