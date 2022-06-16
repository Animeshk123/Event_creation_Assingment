import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cus = (props) => {
  const navigate = useNavigate();
  const deleteData = async () => {
    let data = await fetch(
      `http://localhost:3030/api/v3/app/events?id=${props.id}`,
      {
        method: "DELETE"
      }
    );
    let res = await data.json();
    if (res.done) {
      navigate("/");
    } else {
    }
  };

  const editData = async () => {
    let title = prompt("enter Title to change");
    let data = await fetch(
      `http://localhost:3030/api/v3/app/events?id=${props.id}&name=${title}`,
      {
        method: "PUT"
      }
    );
    let res = await data.json();
    console.log(res);
    if (res.done) {
      navigate("/");
    } else {
    }
  };

  return (
    <>
      <div className="flex mb-4 justify-end">
        <button
          type="button"
          onClick={editData}
          className="p-3 outline-none cursor-pointer"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          type="button"
          onClick={deleteData}
          className="ml-2 cursor-pointer outline-none p-3"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default cus;
