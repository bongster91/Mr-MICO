import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Four0Four from './Pages/Four0Four';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Four0Four />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
