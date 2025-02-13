import "./TopEvents.css";
import Button from "../../components/Button/Button.jsx";
import { TRENDING } from "../../utils/constant";
import CardList from "../../components/CardList/CardList.jsx";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.js";

function TopEvents() {
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const data1 = shuffleArray([...TRENDING]);
  const data2 = shuffleArray([...TRENDING]);
  const data3 = shuffleArray([...TRENDING]);
  const data4 = shuffleArray([...TRENDING]);
  const data5 = shuffleArray([...TRENDING]);
  const data6 = shuffleArray([...TRENDING]);
  return (
    <div id="top-events" className="top-events container">
      <div className="top-events-section">
        <div className="top-events-heading">
          <p>Will Take Place</p>
          <Button data="view all" size={25} />
        </div>
        <CardList height={320}>
          <TopEventsList data={data1} />
        </CardList>
      </div>
      <div className="top-events-section">
        <div className="top-events-heading">
          <p>Around You</p>
          <Button data="view all" size={25} />
        </div>
        <CardList height={320}>
          <TopEventsList data={data2} />
        </CardList>
      </div>
      <div className="top-events-section">
        <div className="top-events-heading">
          <p>Concert</p>
          <Button data="view all" size={25} />
        </div>
        <CardList height={320}>
          <TopEventsList data={data3} />
        </CardList>
      </div>
      <div className="top-events-section">
        <div className="top-events-heading">
          <p>Festival</p>
          <Button data="view all" size={25} />
        </div>
        <CardList height={320}>
          <TopEventsList data={data4} />
        </CardList>
      </div>
      <div className="top-events-section">
        <div className="top-events-heading">
          <p>Seminar</p>
          <Button data="view all" size={25} />
        </div>
        <CardList height={320}>
          <TopEventsList data={data5} />
        </CardList>
      </div>
      <div className="top-events-section">
        <div className="top-events-heading">
          <p>Exhibition</p>
          <Button data="view all" size={25} />
        </div>
        <CardList height={320}>
          <TopEventsList data={data6} />
        </CardList>
      </div>
    </div>
  );
}

const TopEventsList = ({ data }) => {
  const elRef = useIntersectionObserver(0.1);
  return (
    <>
      {data.map((data, index) => (
        <div
          className="events-item"
          key={index}
          style={{ animationDelay: `${0.09 * index}s` }}
          ref={(el) => (elRef.current[index] = el)}
        >
          <div className="events-item-info">
            <img
              src={`/events/${data.img}`}
              draggable={false}
              className="events-item-img"
            />
            <div className="events-item-detail" draggable={false}>
              <h1>{data.name}</h1>
              <p>Semarang</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopEvents;
