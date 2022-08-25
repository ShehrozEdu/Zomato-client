import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import SearchPage from "./components/Filter/SearchPage";
import HomePage from "./components/Home/Homepage";
import RestaurantOverview from "./components/RestaurantOverview/RestaurantOverview";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quick-search" element={<SearchPage />} />
        <Route
          path="/restaurant-overview/:id"
          element={<RestaurantOverview />}
        />
        {/* <Route path="" element="" /> */}
        {/* <Route path="" element="" /> */}
        {/*  */}
        {/*  */}
      </Routes>
    </>
  );
}

export default App;
