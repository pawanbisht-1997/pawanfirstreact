import './App.css';
import { Header } from './components/Header';
import {Banner } from './components/Banner';
import {Bannerservices } from './components/Bannerservices';
import {About} from './components/About';
import {Services} from './components/Services';
import {Certificate} from './components/Certificate';
import {Diploma} from './components/Diploma';
import {Academic} from './components/Academic';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
function App() {
  return (
        <>
          <Header/>
          <Banner/>
          <Bannerservices/>
          <About/>
          <Services/>
          <Certificate/>
          <Diploma/>
          <Academic/>
          <Contact/>
          <Footer/>
      
        </>
     
  );
}

export default App;
