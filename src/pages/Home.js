import { useState, useEffect } from "react";
import Fillter from "../comps/Fillter";
import Card from "../comps/Card";
import show from "../comps/ShowTag";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async (page) => {
    let data = await fetch(
      `http://localhost:3030/api/v3/app/events?type=latest&limit=10&page=${page}`
    );
    let res = await data.json();
    setData(res);
  };

  useEffect(() => {
    getData(1);
  }, []);
  return (
    <>
      <Fillter />
      <div className="container px-4 mx-auto mt-6 flex items-center flex-wrap justify-center">
        {data && data.length != 0 ? (
          data.map((item) => {
            return (
              <Card
                uid={item.uid}
                id={item._id}
                logo={item.logoImageUrl}
                inro={item.name}
                tagline={item.tagline}
              />
            );
          })
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </>
  );
};

export default Home;
