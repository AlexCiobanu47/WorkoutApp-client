import { HashRouter, Route, Routes } from "react-router-dom";
//pages and components
import Navbar from "./components/Navbar";
import Home from "./pages/home";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar></Navbar>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}
export default App;
