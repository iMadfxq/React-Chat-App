import "./App.scss";
import { Route, Routes } from "react-router";

import Home from "./Routes/Home/home.route";
import Channel from "./Components/channel-chat/channel-chat.component";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    if(!localStorage.getItem('deviceId')){
      const deviceId = Date.now()
      localStorage.setItem('deviceId', deviceId)
    }
  }, [])
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={'/General'} element={<Channel channelName={'General'} />} />
      <Route path={'/Jobs'} element={<Channel channelName={'Jobs'} />} />
    </Routes>
  );
}

export default App;
