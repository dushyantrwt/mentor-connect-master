import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Ensure this path is correct
import Mentor from './pages/Join'; // Ensure this path is correct
import Home from './pages/HomePage'; // Ensure this path is correct
import MentorDetail from './pages/MentorDetail';
import Login from './components/Login';
import Registration from './components/Registration';
import AboutMentor from './components/AboutMentor';
// import 'tw-elements-react/dist/css/index.min.css'; // Import the CSS
import FeaturesPage from './pages/FeaturesPage';
import TeamPage from './pages/TeamPage';
import MentorPage from './pages/MentorPage';
import Dashboard from './pages/Dashboard';
import MenteeDashboard from './pages/MenteeDashboard';
import MentorProfile from './components/MentorProfile';
import Room from './pages/Room'


const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/mentor/:id" element={<MentorDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<AboutMentor />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/mentors" element={<MentorPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
        <Route path="/mentor-profile/:id" element={<MentorProfile />} />
        <Route path="/room" element={<Room />} />

      </Routes>
    </Router>
  );
};

export default App;