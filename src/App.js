import logo from './logo.svg';
import './App.css';
import Homepage from './componnents/Homepage';
import Workpages from './componnents/Workpages';
import Services from './componnents/Services';
import Contact from './componnents/Contact';

function App() {
  return (
    <div >
       {/* <Homepage/> */}
       <Workpages/>
       <Services/>
       <Contact/>
    </div>
  );
}

export default App;
