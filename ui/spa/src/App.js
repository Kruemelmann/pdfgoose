import './App.css';
import Navbar from './components/navbar/Navbar.js'
import TabLayout from './components/tab_layout/TabLayout.js';
import Tabbar from './components/tabbar/Tabbar.js'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Tabbar />
    </div>
  );
}

export default App;
