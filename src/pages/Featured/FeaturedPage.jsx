import "./featured.css";
import { FEATURED } from "../../utils/constant";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Button from "../../components/Button/Button";

function FeaturedPage() {
  return (
    <div id="featured" className="container">
      <h1 className="heading">All in One Place</h1>

      <div className="grid-container">
        <div className="box box1">
          <p>Events</p>
          <BoxOne delay={7000} />
        </div>
        <div className="box box2">
          <p>Seminar</p>
          <BoxOne delay={5000} />
        </div>
        <div className="box box3">
          <p>Pameran</p>
          <BoxOne delay={3000} />
        </div>
      </div>
    </div>
  );
}

const BoxOne = ({ delay }) => {
  const [datas, setDatas] = useState(FEATURED);
  const [currentIndex, setCurrentIndex] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    let timer;
    let time = delay;
    const inter = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % datas.length);
      // timer = setTimeout(() => {
      //   if (boxRef.current) {
      //     boxRef.current.classList.add("out");
      //   }
      // }, time - 500);
      // boxRef.current.classList.remove("out");
    }, time);

    // Bersihkan timeout ketika komponen dibersihkan
    return () => {
      clearTimeout(timer);
      clearInterval(inter);
    };
  }, [datas.length]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {datas?.map((data, index) => (
        <div
          key={index}
          className={`box-events ${index === currentIndex ? "active" : ""}`}
        >
          <div className="box-img">
            <img src={data.img} />
          </div>
          <div
            ref={index === currentIndex ? boxRef : null}
            className="box-content"
          >
            <p>{data.location}</p>
            <h1>{data.name}</h1>
            <Button data="Details" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedPage;
