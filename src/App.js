import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import TableCon from './components/tableCon';
import Home from './components/Home';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
