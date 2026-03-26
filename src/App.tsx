import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import FollowingTheNinthPage from './components/pages/FollowingTheNinthPage';
import LoveAndJusticePage from './components/pages/LoveAndJusticePage';
import LastWillPage from './components/pages/LastWillPage';
import FilmmakersPage from './components/pages/FilmmakersPage';
import PressPage from './components/pages/PressPage';
import GetInvolvedPage from './components/pages/GetInvolvedPage';

export type PageName = 'home' | 'following-the-ninth' | 'love-and-justice' | 'last-will' | 'filmmakers' | 'press' | 'get-involved' | 'login';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigate = (page: PageName) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'following-the-ninth':
        return <FollowingTheNinthPage navigate={navigate} />;
      case 'love-and-justice':
        return <LoveAndJusticePage navigate={navigate} />;
      case 'last-will':
        return <LastWillPage navigate={navigate} />;
      case 'filmmakers':
        return <FilmmakersPage navigate={navigate} />;
      case 'press':
        return <PressPage navigate={navigate} />;
      case 'get-involved':
        return <GetInvolvedPage navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1923] text-white">
      {/* Green accent bar */}
      <div className="h-1 bg-[#8b9a6e] w-full fixed top-0 z-[60]" />

      <Navigation currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
