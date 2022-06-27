import "./App.scss";
import { Route, Routes } from "react-router";

import Home from "./Routes/Home/home.route";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default App;
