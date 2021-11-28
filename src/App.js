import './App.css';
import Header from './components/Header';
import Rvideo from './components/Rvideo';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app_page flex">
          <Sidebar/>
          <Rvideo/>
      </div>
      { 
        /*Header */
        /*Sidebar */
        /*Recommended Video*/
      }

    </div>
  );
}

export default App;
