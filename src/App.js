import "./App.css";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Nav from "./Components/Nav";
import Newform from "./Pages/Newform";
import Alltransactions from "./Components/Alltransactions";
import Querytrans from "./Components/Querytrans";
import Edittrans from "./Components/Edittrans";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/transactions" element={<Alltransactions />} />
          <Route path="/transactions/:index" element={<Edittrans />} />
          <Route path="/transactions/new" element={<Newform />} />
          <Route path="/transactions/type/:name" element={<Querytrans />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
