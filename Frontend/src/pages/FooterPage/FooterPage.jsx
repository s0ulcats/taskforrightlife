import React from 'react';
import logo from '../../components/Navbar/Logo.png';
import s from './Footer.module.scss'; 

const FooterPage = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={s.links}>
          <a className={s.link}>Datenschutzerklärung</a>
          <a className={s.link}>Nutzungsbedingungen</a>
        </div>
        <div className={s.contact}>
          <div className={s.phoneWithFlag}>
            <p>Telefon: +44 20 1234 5678</p>
          </div>
        </div>
        <div className={s.rights}>
          <p>&copy; 2025 Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
