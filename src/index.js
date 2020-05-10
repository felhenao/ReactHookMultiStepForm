import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Result from "./Result";

import "./styles.css";

createStore({
  yourDetails: {
    pFirstName: "",
    sFirstName: "",
    pLastName: "",
    sLastName: "",
    email: "",
    phoneNumber: "",
    grade: "",
    
  }
});

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="container">
        <ul className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Step 1</Link>
          </li>
          <li className={location.pathname === "/step2" ? "active" : ""}>
            <Link to="/step2">Step 2</Link>
          </li>
          <li className={location.pathname === "/step3" ? "active" : ""}>
            <Link to="/step3">Step 3</Link>
          </li>
          <li className={location.pathname === "/step4" ? "active" : ""}>
            <Link to="/step4">Step 4</Link>
          </li>
          <li className={location.pathname === "/step5" ? "active" : ""}>
            <Link to="/step5">Step 5</Link>
          </li>
          <li className={location.pathname === "/step6" ? "active" : ""}>
            <Link to="/step6">Step 6</Link>
          </li>
          <li className={location.pathname === "/step7" ? "active" : ""}>
            <Link to="/step7">Step 7</Link>
          </li>
          <li className={location.pathname === "/result" ? "active" : ""}>
            <Link to="/result">Result</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Step1} />
      <Route path="/step2" component={Step2} />
      <Route path="/step3" component={Step3} />
      <Route path="/step4" component={Step4} />
      <Route path="/step5" component={Step5} />
      <Route path="/step6" component={Step6} />
      <Route path="/step7" component={Step7} />
      <Route path="/result" component={Result} />
    </>
  );
};

function App() {
  return (
    <StateMachineProvider>
      <DevTool />
      <div className="container">
        <h1>Flashlight</h1>

        <Router>
          <Pages />
        </Router>
      </div>
    </StateMachineProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
