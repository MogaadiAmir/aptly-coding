
import './App.css';
import DisplayImages from './components/DisplayImages';
import Title from './components/Title';
import { ImagesData } from './components/ImagesData';

function App() {
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
