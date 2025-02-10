import { useEffect, useState } from "react";
import "./slideshow.css";

function Slideshow() {
  const images = ["about.JPG", "contact.JPG", "contact2.JPG", "DSC08797.JPG"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="img-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={`/${image}`}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
}

export default Slideshow;
