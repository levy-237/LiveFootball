import React from "react";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import League from "./pages/League";
import EuroCups from "./pages/EuroCups";
import News from "./pages/News";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/league/:id" element={<League />} />
        <Route path="/euroCups/:id" element={<EuroCups />} />
        <Route path="/news" element={<News />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
