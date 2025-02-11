/* eslint react/prop-types: 0 */

import { useRef, useState } from "react";
import "./CardList.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { IoMdArrowForward } from "react-icons/io";

function CardList({ children, title }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startX;
    scrollRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const distance = e.touches[0].clientX - startX;
    scrollRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchCancel = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    const scrollPosition = scrollRef.current.scrollLeft;
    if (window.innerWidth <= 600) {
      return; // Fungsi berhenti jika lebar layar <= 600px
    }
    // const title = document.getElementById("title");
    if (titleRef.current) {
      //   const opacity = Math.max(0, 1 - scrollPosition / 200);
      //   title.style.opacity = opacity;

      const scale = Math.max(0, 1 - scrollPosition / 500);
      titleRef.current.style.transform = `scale(${scale})`;
    }
  };
  return (
    <div
      className="card-list"
      // style={{ height: `${height ? height + "px" : "350px"}` }}
    >
      {title && (
        <div ref={titleRef} id="title" className="title">
          <p>{title.toUpperCase()}</p>
        </div>
      )}
      <div
        className="scroll-container"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
        onScroll={handleScroll}
        style={{ cursor: `${isDragging ? "grabbing" : "grab"}` }}
      >
        <div className="scroll-content">
          {children}
          <div className="scroll-view">
            <IoMdArrowForward size={25} />
            <p>View All</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
