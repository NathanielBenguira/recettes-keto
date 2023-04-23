import { Routes, Route } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import ListView from './Pages/ListView/ListView';
import DetailView from './Pages/DetailView/DetailView';
import './App.css';

const App = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  }
  return (
    
      <div>
        <span id="main-title-container">
          <span id="main-title" onClick={()=>handleClick()}>Keto Recipes</span>
        </span>
        <Routes>
          <Route index element={<ListView />} />
          <Route path="/" element={<ListView />} />
          <Route path="/recipe/:id" element={<DetailView />} />
        </Routes>
      </div>
    
  );
};

export default App;
