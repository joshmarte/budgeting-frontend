import "./App.css";
import { Routes, Route } from "react-router-dom";

// COMPONENTS
import Nav from "./Components/Nav";
import Newform from "./Pages/Newform";
import Alltransactions from "./Components/Alltransactions";
import Querytrans from "./Components/Querytrans";
import Show from "./Pages/Show";
import Edittrans from "./Components/Edittrans";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/transactions" element={<Alltransactions />} />
          <Route path="/transactions/type" element={<Querytrans />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edittrans />} />
          <Route path="/transactions/new" element={<Newform />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
