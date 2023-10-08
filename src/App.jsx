import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./components/Test";
import Main from "./pages/Home";

import Register from "./pages/Register";

import AuthContext from "./context/Auth.context";
import NormalContext from "./context/normalContext";

function App() {
  return (
    <AuthContext>
      <NormalContext>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/1" element={<Test />} />
              <Route
                path="/2"
                element={<div className="animate__fadeInUpBig">2</div>}
              />
              <Route element={<Register />} path="/register" />
            </Route>
          </Routes>
        </Router>
      </NormalContext>
    </AuthContext>
  );
}

export default App;
