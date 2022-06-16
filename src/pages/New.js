import { useState, useContext } from "react";
import Form from "../comps/Form";
import { typeContext } from "../formContext";

const New = () => {
  const [type, setType] = useState("Events");
  const [show, setShow] = useState("hidden");
  const user = useContext(typeContext);
  return (
    <>
      <div className="container px-4 my-6 mx-auto">
        <div className="flex items-center flex-wrap justify-between">
          <p>I Want To Create A Nudge For : </p>
          <div className="flex items-center ml-4 cursor-pointer relative">
            <p
              onClick={() => {
                show == "" ? setShow("hidden") : setShow("");
              }}
            >
              {type}
            </p>
            <i
              onClick={() => {
                show == "" ? setShow("hidden") : setShow("");
              }}
              className="fa-solid fa-angle-down ml-4"
            ></i>
            <div className={show}>
              <div className="absolute down shadow bg-white w-auto rounded">
                <li
                  className="cursor-pointer py-2 px-4"
                  onClick={() => {
                    setType("Articals");
                    user.change("artical");
                    setShow("hidden");
                  }}
                >
                  Articals
                </li>
                <li
                  className="cursor-pointer pb-2 px-4"
                  onClick={() => {
                    setType("Events");
                    user.change("event");
                    setShow("hidden");
                  }}
                >
                  Events
                </li>
              </div>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export default New;
