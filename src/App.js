import './App.css';
import Props from './components/Props';

function App() {
  return (
    <div className="App">
      <Props name="업무테스트" age={30} isAdmin={true} />
    </div>
  );
}

export default App;
