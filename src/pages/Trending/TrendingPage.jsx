import CardList from "../../components/CardList/CardList";
import "./Trending.css";
import { TRENDING } from "../../utils/constant";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function TrendingPage() {
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const data1 = shuffleArray([...TRENDING]);
  const data2 = shuffleArray([...TRENDING]);
  const data3 = shuffleArray([...TRENDING]);

  return (
    <div id="trending" className="container">
      <div className="trending-content">
        <CardList title="Latest Release" data={data1}>
          <TrendingContent data={data1} />
        </CardList>
        <CardList title="Top Trending">
          <TrendingContent data={data2} />
        </CardList>
        <CardList title="Most Popular">
          <TrendingContent data={data3} />
        </CardList>
      </div>
    </div>
  );
}

const TrendingContent = ({ data }) => {
  const elRef = useIntersectionObserver(0.2);

  return (
    <>
      <div className="trending-item"></div>

      {data.map((data, index) => (
        <div
          className="trending-item"
          key={index}
          style={{ animationDelay: `${0.09 * index}s` }}
          ref={(el) => (elRef.current[index] = el)}
        >
          <div className="trending-item-info">
            <img
              src={`/public/events/${data.img}`}
              draggable={false}
              className="trending-item-img"
            />
            <div className="trending-item-detail" draggable={false}>
              <h1>{data.name}</h1>
              <p>Semarang</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TrendingPage;
