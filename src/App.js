import React from "react";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import CreateAccount from "./Screens/CreateAccount";
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<Welcome/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/createaccount" element={<CreateAccount/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
