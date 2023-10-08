import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./components/Test";
import Main from "./pages/Home";

import NormalContext from "./context/normalContext";

function App() {
  return (
    <NormalContext>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/1" element={<Test />} />
            <Route
              path="/2"
              element={<div className="animate__fadeInUpBig">2</div>}
            />
          </Route>
        </Routes>
      </Router>
    </NormalContext>
  );
}

export default App;
