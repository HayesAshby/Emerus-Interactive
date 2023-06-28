import materialData from "./data";
import generatePOI from "./builder";

const mapped = () => {
  const mappedLocations = materialData.map((data) => {
    const place = generatePOI(data);
    return place;
  });
  return mappedLocations;
};

export default mapped;
