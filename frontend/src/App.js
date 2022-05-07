import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NewPlace from "./places/pages/Place";
import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Users />} />
        <Route exact path="/places/new" element={<NewPlace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
