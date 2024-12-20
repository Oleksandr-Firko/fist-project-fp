import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import HomeWork1 from "./components/homeWorkComponents/HomeWork1/HomeWork1.jsx";
import HomeWork2 from "./components/homeWorkComponents/HomeWork2/HomeWork2.jsx";
import HomeWork3 from "./components/homeWorkComponents/HomeWork3/HomeWork3.jsx";
import HomeWork4 from "./components/homeWorkComponents/HomeWork4/HomeWork4.jsx";
import HomeWork5 from "./components/homeWorkComponents/HomeWork5/HomeWork5.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="link-box">
        <a className="btn" href="/homeWork1">
          HomeWork1
        </a>
        <a className="btn" href="/homeWork2">
          HomeWork2
        </a>
        <a className="btn" href="/homeWork3">
          HomeWork3
        </a>
        <a className="btn" href="/homeWork4">
          HomeWork4
        </a>
        <a className="btn" href="/homeWork5">
          HomeWork5
        </a>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/homeWork1" element={<HomeWork1 />} />
          <Route path="/homeWork2" element={<HomeWork2 />} />
          <Route path="/homeWork3" element={<HomeWork3 />} />
          <Route path="/homeWork4" element={<HomeWork4 />} />
          <Route path="/homeWork5" element={<HomeWork5 />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 ООО «Here should be something». All rights reserved.</p>
    </footer>
  );
}

export default App;
