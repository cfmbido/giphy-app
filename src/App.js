import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const IronManPage = React.lazy(() => import("./pages/IronManPage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));

function App() {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="iron_man" element={<IronManPage />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
