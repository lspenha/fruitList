import {
  Routes,
  Route
} from "react-router-dom";

import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="detalhes/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;