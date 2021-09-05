import "./App.css";
import DisplayImages from "./components/DisplayImages";
import Title from "./components/Title";
import { ImagesData } from "./components/ImagesData";
import { useEffect } from "react";
import ReactGA from "react-ga";

function App() {
  
  useEffect(() => {
    ReactGA.initialize("UA-206742245-1", { debug: true });
    // TO enable test failure
    // ReactGA.initialize("UA-206742245-1", { testMode: true })
    //to report page view
    ReactGA.pageview("/");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <DisplayImages slides={ImagesData} />
      </header>
    </div>
  );
}

export default App;
