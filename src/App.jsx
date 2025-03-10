import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { MyProvider } from "./contexts/EventContext";

function App() {
  return (
    <MyProvider>
      <Header />
      <Outlet />
    </MyProvider>
  );
}

export default App;
