import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Search from './Routes/Search';
import Home from './Routes/Home';
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Routes>
          <Route path="/search/:searchterm" element={<Search/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
     
     
      { 
        /*Header */
        /*Sidebar */
        /*Recommended Video*/
      }

    </div>
  );
}

export default App;
