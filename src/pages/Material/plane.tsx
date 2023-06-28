import mapped from "./mapped";

const MaterialPlane = (props) => {
  return (
    <div>
      <img
        // onMouseOver={() => {}}
        src="/Emerus-Interactive/material-plane.jpeg"
        alt="Workplace"
        useMap="#workmap"
        width="auto"
        height="auto"
      />

      <map name="workmap">
        {mapped().map((place) => {
          return place.area;
        })}
      </map>
    </div>
  );
};
export default MaterialPlane;
