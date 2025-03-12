
import './App.css';

import Productcard from './components/productcard.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <div>
     <Routes>
      <Route path='/' element = {<Productcard/>}/>
     </Routes>
    </div>
  );
}

export default App;
