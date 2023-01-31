import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Accomodation } from './pages/Accommodation';
import { Error } from './pages/Error';
import logo from './assets/logo.png'
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <header>
        <img src={logo} alt="Kasa logo" className="main-logo"/>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accomodation" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
