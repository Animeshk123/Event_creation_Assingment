import { NavLink } from "react-router-dom";

const Fillter = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className="fa-solid fa-arrow-down"></i>
          <p className="ml-4">Latest Articles And Events</p>
        </div>
        <div className="flex items-center">
          <NavLink to="/create">
            <a className=" outline-none p-2 rounded-lg">
              <i className="fa-solid fa-plus mr-2"></i>New
            </a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Fillter;
