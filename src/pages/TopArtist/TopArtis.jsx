import React from "react";
import "./TopArtist.css";
import Button from "../../components/Button/Button";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CardList from "../../components/CardList/CardList";

function TopArtis() {
  const elRef = useIntersectionObserver(0.2);

  return (
    <div id="top-artist" className="top-artist container">
      <h1 className="heading">Meet the Top Artists</h1>

      <div className="title">
        <Button data="view all" size={10} />
      </div>
      <div className="artist-container">
        <CardList>
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              className="artist-item"
              key={index}
              ref={(el) => (elRef.current[index] = el)}
              style={{ animationDelay: `${0.09 * index}s` }}
            >
              <img src="/avatar.jpg" draggable={false} />
              <p>Artist Name</p>
            </div>
          ))}
        </CardList>
      </div>
    </div>
  );
}

export default TopArtis;
