import "./styles/tailwind-pre-build.css";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";
import New from "./pages/New";
import Wrapper from "./formContext";

const App = () => {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/create" element={<New />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
