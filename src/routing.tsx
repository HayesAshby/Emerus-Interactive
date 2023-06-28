import { Routes, Route } from "react-router";
import Shadowfell from "./pages/Shadowfell/plane";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import MaterialPlane from "./pages/Material/plane";
import mapped from "./pages/Material/mapped";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Shadowfell" element={<Shadowfell />} />
      <Route path="/MaterialPlane" element={<MaterialPlane />} />
      {mapped().map((place) => {
        return place.route;
      })}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
export default Routing;
