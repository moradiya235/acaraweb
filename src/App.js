import './App.css';
import Footer from './Commoncomponents/Footer/Footer';
import Quotepage from './Commoncomponents/Quote/Quotepage';
import AboutPage from './componnents/AboutPage';
import Homepage from './componnents/Homepage';
import Workpages from './componnents/Workpages';
import Services from './componnents/Services';
import Contact from './componnents/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      {/* <Homepage/> */}
      {/* <Workpages/> */}
      {/* <Services/> */}
      {/* <AboutPage/> */}
      {/* <Contact/> */}
      {/* <Quotepage/> */}
      {/* <Footer/> */}
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/works' element={<Workpages />} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/About' element={<AboutPage/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
