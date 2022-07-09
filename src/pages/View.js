import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { typeContext } from "../formContext";
import Cus from "../comps/Cus";

const View = () => {
  const { id } = useParams();
  const user = useContext(typeContext);
  const [data, setData] = useState([]);
  const getData = async () => {
    if (id.length < 4) {
      setData(user.data);
    } else {
      let data = await fetch(
        `https://eventbackend.vercel.app/api/v3/app/events?id=${id}`
      );
      let res = await data.json();
      console.log(res);
      setData(res);
    }
  };

  function taskDate(dateMilli) {
    var d = (new Date(dateMilli) + "").split(" ");
    d[2] = d[2] + ",";

    return [d[0], d[1], d[2], d[3]].join(" ");
  }

  useEffect(() => {
    getData();
    console.log(data);
  }, [id]);

  return (
    <>
      <div className="container mx-auto px-4 my-6">
        <Cus id={data.uid} />
        <img
          src={data.coverImageUrl}
          className="w-full h-72 rounded-lg object-cover object-center"
        />
        <h1 className="text-2xl sm:text-4xl mt-6 font-bold text-center">
          {data.name}
        </h1>
        <p className="text-center mt-4 text-lightWhite">{data.tagline}</p>
        <hr />
        <p className="mt-12 px-4">{data.description}</p>
        <div className="flex items-center px-4 mt-12 justify-between">
          <img src={data.logoImageUrl} className="h-12 w-12 rounded-full object-cover object-center"/>
          <p>{taskDate(data.createdAt)}</p>
        </div>
      </div>
    </>
  );
};

export default View;
