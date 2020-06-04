import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Joke from "./components/Joke";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="container mx-auto">
          <Switch>
            <Route path="/" exact component={Joke} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
