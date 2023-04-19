import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListView from './ListView';
import DetailView from './DetailView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<ListView />} />
        <Route path="/" element={<ListView />} />
        <Route path="/recipe/:id" element={<DetailView />} />
      </Routes>
    </Router>
  );
};

export default App;
