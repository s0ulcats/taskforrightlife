import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout/Layout.jsx';
import AboutAsPage from './pages/AboutAsPage/AboutAsPage.jsx';
import BlogPage from './pages/BlogPage/BlogPage.jsx';
import ContactsPage from './pages/ContactsPage/ContactsPage.jsx';
import FooterPage from './pages/FooterPage/FooterPage.jsx';
import SearchPage from './pages/SearchPage/SearchPage.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import ThankUPage from './pages/ThankUPage/ThankUPage.jsx';
import UsersPage from './pages/UsersPage/UsersPage.jsx';
import Preloader from './components/Preloader/Preloader.jsx';

function App() {
  const dispatch = useDispatch();

  return (
    <Layout>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/faq" element={<FooterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/aboutas" element={<AboutAsPage />} />
          <Route path="/thanku" element={<ThankUPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Suspense>
      <ToastContainer position="bottom-right" />
    </Layout>
  );
}

export default App;
