import "./ListPage.scss";
import Filter from "../../filter/Filter";
import Card from "../../card/Card";
import Map from "../../map/Map";
import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

function ListPage() {
  const data = useLoaderData();
  console.log(data);
  
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading package location</p>}
            >
              {(postResponse) =>
                postResponse?.data?.length > 0 ? (
                  postResponse.data.map((post) => (
                    <Card key={post.id} item={post} />
                  ))
                ) : (
                  <p>No posts available</p>
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">{/* <Map items={data} /> */}</div>
    </div>
  );
}

export default ListPage;
