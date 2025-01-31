import React from 'react';
import s from './BlogPage.module.scss';
import card from './unnamed.jpg';

const BlogPage = () => {
  return (
    <div className={s.container}>
      <section className={s.heroSection}>
        <div className={s.heroContent}>
          <h1 className={s.heroTitle}>Finance CEOS</h1>
          <p className={s.heroDescription}>
          For 25 years, we have been helping people around the world to achieve financial goals and ensure the future of their business. 🚀
            <br />
            Our experts are a team of experts who are always one step ahead, ready to offer innovative solutions to achieve your success. 💡
            <br />
            Join us and be sure of your financial path!
          </p>
        </div>
        <img src={card} alt="Finance" className={s.heroImage} />
      </section>
    </div>
  );
};

export default BlogPage;
