import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TopNav from './components/top-nav/TopNav';
import MainSection from './components/main-section/MainSection';
import TopSection from './components/top-section/TopSection';

function App() {
  return (
    <body className="landing">
    <div>
    <TopNav/>
    <div id='content'>
    <Sidebar/>
    
    <MainSection/>
    </div>
   
   
    </div>
    
    
    
    </body>
  );
}

export default App;

