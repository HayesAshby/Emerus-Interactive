import { Card, Tooltip } from "@mui/material";
import { Route } from "react-router-dom";

const generatePOI = (place: { name; HoverInfo; POIPage; coords; shape }) => {
  // "459,457,7"
  return {
    key: place.name,
    route: (
      <Route
        key={place.name}
        path={`/MaterialPlane/${place.name}`}
        element={
          <Card sx={{ minHeight: "100vh", minWidth: "100vw" }}>
            {place.POIPage}
          </Card>
        }
      />
    ),
    area: (
      <Tooltip key={place.name} followCursor title={place.HoverInfo}>
        <area
          alt="area"
          shape={place.shape}
          coords={place.coords}
          href={`/Emerus-Interactive/#/MaterialPlane/${place.name}`}
        />
      </Tooltip>
    )
  };
};
export default generatePOI;
