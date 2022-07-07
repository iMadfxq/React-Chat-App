import "./App.scss";
import { Route, Routes } from "react-router";

import Home from "./Routes/Home/home.route";
import Channel from "./Components/channel-chat/channel-chat.component";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={'/General'} element={<Channel channelName={'General'} />} />
      <Route path={'/Jobs'} element={<Channel channelName={'Jobs'} />} />
    </Routes>
  );
}

export default App;
