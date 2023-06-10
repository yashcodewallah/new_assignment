import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import TableCon from './components/tableCon';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Search />
        <TableCon />
    </div>
  );
}

export default App;
