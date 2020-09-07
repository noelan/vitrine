import React from "react";
import "./main.scss";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="haha">
        <main>
          <Router>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
