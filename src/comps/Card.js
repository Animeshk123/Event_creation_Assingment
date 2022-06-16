import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <NavLink to={`/view/${props.uid}`} key={props.id}>
        <div className="shadow-lg bg-white rounded-lg p-4 mb-8 max-w-sm mx-4">
          <div className="flex items-center">
            <img
              src={props.logo}
              className="h-12 w-12 object-cover object-center rounded-full"
            />
            <h2 className="ml-4 capitalize text-black">{props.inro}</h2>
          </div>
          <p className="mt-4 text-lightWhite capitalize">{props.tagline}</p>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
