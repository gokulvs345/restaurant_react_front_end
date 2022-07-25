
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
