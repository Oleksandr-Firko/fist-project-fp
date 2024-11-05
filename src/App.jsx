import "./App.css";
import HomeWork2 from "./components/homeWorkComponents/HomeWork2/HomeWork2.jsx";

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
      <div>Info cards.</div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <HomeWork2 />
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
