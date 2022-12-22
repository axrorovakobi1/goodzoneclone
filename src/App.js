import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader';
import MiddleHeader from './components/MiddleHeader';
import BottomHeader from './components/BottomHeader';
import Carusel from './components/carusel/Carusel';
import CardCarusel from './components/card/CardCarusel';
import CardCarusel2 from './components/card/CardCarusel2';
import RightButton from './components/card/RightButton';
import Footer from './components/card/Footer';


function App() {
  return (
    <div className="App">
      <TopHeader/>
      <MiddleHeader/>
      <BottomHeader/>
      <Carusel/>
      <CardCarusel/>
      <CardCarusel2/>
      <RightButton/>
      <Footer/>
      
    
       
    </div>
  );
}

export default App;
