import mapped from "./mapped";
import Card from "@mui/material/Card";

const MaterialPlane = (props) => {
  return (
    <Card>
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
    </Card>
  );
};
export default MaterialPlane;
