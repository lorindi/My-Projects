import "./ListPage.scss";
import { listData } from "../../../lib/dummydata";
import Filter from "../../filter/Filter";
import Card from "../../card/Card";
import Map from "../../map/Map";
import { useLoaderData } from "react-router-dom";

function ListPage() {
  const posts = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {posts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={posts} />
      </div>
    </div>
  );
}

export default ListPage;
