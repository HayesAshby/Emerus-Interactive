import shadowfellData from "./data";
import generatePOI from "./builder";

const mappedShadowfell = () => {
  const mappedLocations = shadowfellData.map((data) => {
    const place = generatePOI(data);
    return place;
  });
  return mappedLocations;
};

export default mappedShadowfell;
