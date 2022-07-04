import "./App.scss";
import { Route, Routes } from "react-router";

import Home from "./Routes/Home/home.route";
import Channel from "./Components/channel-chat/channel-chat.component";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={'/chat'} element={<Channel channelName={'General'} />} />
    </Routes>
  );
}

export default App;
