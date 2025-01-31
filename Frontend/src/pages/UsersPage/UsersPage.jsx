import React, { useState, useEffect } from 'react';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../../components/Preloader/Preloader';
import { getAllUsers } from '../../redux/features/users/usersSlice';
import s from './UsersPage.module.scss';

const UsersPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getAllUsers());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogin = () => {
    if (username === 'admin' && password === '31591admin') {
      setIsAuthenticated(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  if (loading) return <Preloader />;
  if (error) return <p className={s.error}>{'Some error occurred'}</p>;

  // Фильтруем пользователей, чтобы не показывать пользователей с одинаковыми номерами телефонов
  const uniqueUsers = users
    .filter((user) => user.username !== 'admin')  // Исключаем админа
    .reduce((acc, user) => {
      // Добавляем пользователя в массив, если его номер телефона еще не был добавлен
      if (!acc.some((existingUser) => existingUser.phone === user.phone)) {
        acc.push(user);
      }
      return acc;
    }, []);

  return (
    <div className={s.container}>
      {!isAuthenticated ? (
        <form onSubmit={handleSubmit} className={`${s.form} ${s.light}`}>
          <div className={s.title}>Login</div>
          <div className={s.label}>
            <AiOutlineUser className={s.icon} />
            <input
              type="text"
              className={s.input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={s.label}>
            <AiOutlineLock className={s.icon} />
            <input
              type="password"
              className={s.input}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={s.buttonGroup}>
            <button
              type="submit"
              className={s.submitButton}
              disabled={username !== 'admin' || password !== '31591admin'}
            >
              Login
            </button>
          </div>
        </form>
      ) : (
        <div className={s.userGrid}>
          {uniqueUsers.length ? (
            uniqueUsers.map((user) => (
              <div key={user._id} className={s.userCard}>
                <div className={s.avatar}>
                  <AiOutlineUser className={s.userIcon} />
                </div>
                <div className={s.userInfo}>
                  <div className={s.username}>{user.username || 'Unknown User'}</div>
                  <div className={s.phone}>{user.phone || 'Unknown User'}</div>
                </div>
              </div>
            ))
          ) : (
            <p>{'Users not found'}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
