import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Hello from "./Hello";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Hello} />
        <Route path="/about" component={Hello} />
        <Route path="/topics" component={Hello} />
      </div>
    </Router>
  );
}

export default App;
