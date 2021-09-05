
import './App.css';
import DisplayImages from './components/DisplayImages';
import Title from './components/Title';
import { ImagesData } from './components/ImagesData';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
function App() {
  useEffect(()=>{
    ReactGA.initialize("G-B4VZFC99YF", { debug: true })
    console.log('test',ReactGA)
    //to report page view
    ReactGA.pageview(window.location.pathname + window.location.search)
  },[])
  return (
    <div className="App">
      <header className="App-header">
      <Title/>
      <DisplayImages  slides={ImagesData} />
      </header>
    </div>
   

  );
}

export default App;
