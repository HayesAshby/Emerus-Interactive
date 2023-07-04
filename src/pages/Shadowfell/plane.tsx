import mapped from "./mapped";

const Shadowfell = (props) => {
  return (
    <div>
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
    </div>
  );
};
export default Shadowfell;
