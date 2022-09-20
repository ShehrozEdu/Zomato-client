import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import SearchPage from "./components/Filter/SearchPage";
import HomePage from "./components/Home/Homepage";
import RestaurantOverview from "./components/RestaurantOverview/RestaurantOverview";
import ProtectedRoutes from "./components/utils/PrivateRoutes";
import LoginPage from "./components/Users/LoginPage";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#ffff" highlightColor="#cacaca">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quick-search" element={<SearchPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/restaurant-overview/:id"
              element={<RestaurantOverview />}
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </SkeletonTheme>
    </>
  );
}

export default App;
