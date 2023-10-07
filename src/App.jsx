import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route path="/1" element={<div>1</div>} />
          <Route path="/2" element={<div>2</div>} />
          <Route path="/3" element={<div>3</div>} />
          <Route path="/4" element={<div>4</div>} />
          <Route path="/5" element={<div>5</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
