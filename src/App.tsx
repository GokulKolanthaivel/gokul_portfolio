import './App.css';
import NavTab from './NavTab';
import AppRouter from './AppRouter';
import Footer from './Footer';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <div className='navComponent'>
        <NavTab ></NavTab>
      </div>
      <div className='mainComponent'>
        <AppRouter></AppRouter>
      </div>
    </div>
  );
}

export default App;
