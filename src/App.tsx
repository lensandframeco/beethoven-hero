import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import FollowingTheNinthPage from './components/pages/FollowingTheNinthPage';
import LoveAndJusticePage from './components/pages/LoveAndJusticePage';
import LastWillPage from './components/pages/LastWillPage';
import FilmmakersPage from './components/pages/FilmmakersPage';
import PressPage from './components/pages/PressPage';
import GetInvolvedPage from './components/pages/GetInvolvedPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0f1923] text-white">
        {/* Green accent bar */}
        <div className="h-1 bg-[#8b9a6e] w-full fixed top-0 z-[60]" />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/following-the-ninth" element={<FollowingTheNinthPage />} />
            <Route path="/love-and-justice" element={<LoveAndJusticePage />} />
            <Route path="/last-will" element={<LastWillPage />} />
            <Route path="/filmmakers" element={<FilmmakersPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
