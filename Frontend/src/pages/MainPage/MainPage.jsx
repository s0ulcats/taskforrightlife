import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import AboutAsPage from '../AboutAsPage/AboutAsPage';
import BlogPage from '../BlogPage/BlogPage';
import ContactsPage from '../ContactsPage/ContactsPage';
import FooterPage from '../FooterPage/FooterPage';
import SearchPage from '../SearchPage/SearchPage';
import Navbar from '../../components/Navbar/Navbar';
import CookieConsent from 'react-cookie-consent';

const MainPage = React.memo(() => {
  const [showCookiePopup, setShowCookiePopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('userConsent');
    if (!consent) {
      setShowCookiePopup(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('userConsent', 'true');
    setShowCookiePopup(false);
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '60px' }}>
        <section id="blog-section">
          <BlogPage />
        </section>
        <section id="about-section">
          <AboutAsPage />
        </section>
        <section id="search-section">
          <SearchPage />
        </section>
        <section id="contacts-section">
          <ContactsPage />
        </section>
        <section id="faq-section">
          <FooterPage />
        </section>
      </div>

      {showCookiePopup && (
        <CookieConsent
          location="bottom"
          buttonText="Submit"
          cookieName="userConsent"
          style={{ background: '#2B373B' }}
          buttonStyle={{
            background: '#4CAF50',
            color: 'white',
            fontSize: '13px',
            borderRadius: '5px',
            padding: '10px 20px',
          }}
          expires={365}
          onAccept={handleAcceptCookies}
        >
          This site uses cookies to improve your work. Continuing to view the site, you agree to use cookies.
        </CookieConsent>
      )}
    </>
  );
});

export default MainPage;
