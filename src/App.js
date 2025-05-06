import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Page01 from './components/pages/Page01';
import Page02 from './components/pages/Page02';
import Page00 from './components/pages/Page00';
import Parent from './components/props/Parent';

function App() {

  return (
    <div className="App">
     
      <Parent />


      {/* <BrowserRouter>
        <nav style={{display: 'flex', left: '0', top: '0', margin: '20px'}}>
          <Link to="/src/components/pages/Page01.jsx">Page01</Link> | 
          <Link to="/src/components/pages/Page02.jsx">Page02</Link>
        </nav>

        <Routes>
          <Route path='/src/components/pages/Page01.jsx' element={ <Page01/>} />
          <Route path='/src/components/pages/Page02.jsx' element={ <Page02/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;







