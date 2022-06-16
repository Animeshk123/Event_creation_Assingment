import { useState, createContext } from "react";

const typeContext = createContext();

const Wrapper = ({ children }) => {
  const [type, setType] = useState("event");
  const [data, setData] = useState(null);
  console.log(type);

  return (
    <typeContext.Provider
      value={{ type: type, change: setType, preview: setData, data: data }}
    >
      {children}
    </typeContext.Provider>
  );
};

export default Wrapper;
export { typeContext };
