// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [col, setCol] = useState("cyan");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled ", "success");
      document.title = "TextUtils - light Mode";
    }
  };
  const cyanMode = () => {
    if (col === "cyan") {
      setCol("purple");
      document.body.style.backgroundColor = "cyan";
      showAlert("cyan mode has been enabled", "success");
      document.title = "TextUtils - cyan Mode";
    } else {
      setCol("cyan");
      document.body.style.backgroundColor = "purple";
      // document.body.style.color ="white";
      showAlert("purples mode has been enabled ", "success");
      document.title = "TextUtils - purple Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          // aboutText="About"
          col={col}
          mode={Mode}
          toggleMode={toggleMode}
          cyanMode={cyanMode}
        />
         <Alert alert={alert}  />
        {/* <Switch>
          <Route exact path="/About">
            <About />
          </Route>

          <Route exact path="/"> */}
            <TextForm
              mode={Mode}
              showAlert={showAlert}
              heading="Enter the text to analyze here : "
            />
            
          {/* </Route> */}
        {/* </Switch> */}
       
        <div className="container my-3"></div>
      {/* </Router> */}
    </>
  );
}

export default App;
