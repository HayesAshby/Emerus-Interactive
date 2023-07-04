import materialData from "./data";
import generatePOI from "./builder";

const mappedMaterial = () => {
  const mappedLocations = materialData.map((data) => {
    const place = generatePOI(data);
    return place;
  });
  return mappedLocations;
};

export default mappedMaterial;
