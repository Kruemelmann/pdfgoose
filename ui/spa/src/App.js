import './App.css';
import Navbar from './components/navbar/Navbar.js'
import Tabbar from './components/tabbar/Tabbar.js'
import TabLayout from './components/tab_layout/TabLayout.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Tabbar />

        <TabLayout />
    </div>
  );
}

export default App;
