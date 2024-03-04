import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Pages from './Component/Pages';
import Menus from './Component/Menus';
import About from './Component/About';
import MainBuy from './buyproduct/MainBuy';

// import Collage from './Component2/Collage';



function App() {

  return (
    <div className="App">
      <Navbar />
     
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path ='pages' element={<Pages/>}/>
        <Route path ='Menu' element={<Menus />} >
        </Route>
        <Route path='about' element={<About />} />
          <Route path='/buy' element={<MainBuy />} />
        
      </Routes>
       
     
    </div>
  );
}

export default App;
