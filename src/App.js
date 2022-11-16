import './App.css';
import ResourceGroupList from './ResourceGroupList';
import SingleResourceGroup from './SingleResourceGroup';
import SubmitResource from './SubmitResource';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResourceGroupList/>
        <p></p>
        <SingleResourceGroup/>
        <p></p>
        <SubmitResource/>
      </header>
    </div>
  );
}

export default App;
