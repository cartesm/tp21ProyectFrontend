import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./pages/Home";

import { Toaster } from "sonner";

import AddLocation from "./components/AddLocation";
import Point from "./components/DataPoint";
import Login from "./components/Login";
import Register from "./components/Register";
import Resport from "./components/ReportForm";

import Types from "./components/Types";

import AuthContext from "./context/Auth.context";
import LocationContext from "./context/Locations.context";
import NormalContext from "./context/normalContext";

function App() {
  return (
    <AuthContext>
      <NormalContext>
        <LocationContext>
          <Toaster position="top-right" />
          <Router>
            <Routes>
              <Route path="/tp21ProyectFrontend/" element={<Main />}>
                <Route path="/test" element={<div>esahdjksadgkjgafg</div>} />
                <Route element={<Register />} path="/register" />
                <Route element={<Login />} path="/login" />
                <Route element={<AddLocation />} path="/add-location" />
                <Route element={<Point />} path="/point/:id">
                  <Route element={<Types />} path="/point/:id/type/:typ" />
                </Route>
                <Route path="/reportIssue" element={<Resport />} />
              </Route>
            </Routes>
          </Router>
        </LocationContext>
      </NormalContext>
    </AuthContext>
  );
}

export default App;
