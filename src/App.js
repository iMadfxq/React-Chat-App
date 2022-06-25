import MessageForm from "./Components/message-form/message-form.component";
import "./App.scss";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<MessageForm />} />
      <Route path="/p" element={} />
    </Routes>
  );
}

export default App;
