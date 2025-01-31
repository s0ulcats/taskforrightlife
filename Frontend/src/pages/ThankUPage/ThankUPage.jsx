import React from 'react';
import s from './ThankUPage.module.scss';

const ThankUPage = () => {
  return (
    <div className={s.container}>
      <section className={s.heroSection}>
        <div className={s.heroContent}>
          <h1 className={s.heroTitle}>Thank You!</h1>
          <p className={s.heroDescription}>
            Thank you for filling out the form! 🎉
            <br />
            Your submission has been successfully received. Our team will review it and get in touch with you shortly. <br />
            We appreciate your interest in working with us. Rest assured, we are here to help you achieve your financial goals! 💼
          </p>
          <p className={s.heroDescription}>
            Meanwhile, feel free to explore more about our services and offerings on our website. 🌐
          </p>
        </div>
      </section>
    </div>
  );
};

export default ThankUPage;
