import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Home from './Home';
import About from './About';
import User from './User';

const Navbar = () => (
  <nav style={{ backgroundColor: '#ff69b4', padding: '15px 20px', display: 'flex', gap: '20px', fontFamily: 'sans-serif' }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
    <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
  </nav>
);

const NotFound = () => (
  <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#fff0f5', minHeight: '90vh' }}>
    <Helmet>
      <title>exam-review</title>
    </Helmet>
    <h1 style={{ fontSize: '24px', fontWeight: 'normal', margin: 0, color: '#c71585' }}>Error</h1>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}