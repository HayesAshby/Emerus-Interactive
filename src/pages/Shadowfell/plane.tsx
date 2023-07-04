import mapped from "./mapped";
import Card from "@mui/material/Card";

const Shadowfell = (props) => {
  return (
    <Card>
      <img
        // onMouseOver={() => {}}
        src="/Emerus-Interactive/shadowfell.jpg"
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
export default Shadowfell;
