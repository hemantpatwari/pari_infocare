import "./App.css";
import Header from "./components/Header.js";
import Holding from "./components/Holding";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Header />
      <div className="bodyItems">
        <Search />
        <Holding />
      </div>
    </div>
  );
}

export default App;
