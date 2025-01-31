import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';  
import './ContactsPage.scss';
import { toast } from 'react-toastify';

export default function ContactsPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setForm({ ...form, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      toast.success('Please fill out all fields');
      return;
    }

    try {
      setLoading(true);

      await axios.post('/users', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: 'defaultPassword123', 
      });

      navigate('/thanku');
    } catch (error) {
      toast.success('Error when sent! Try again.');
      console.error('Error sending user data:', error);
    } finally {
      setLoading(false);
    }
};

  return (
    <div className="contacts-page">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="form-title">📞 Contact us</h2>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            className="form-input" 
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            className="form-input" 
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <PhoneInput 
            country={'ua'} 
            value={form.phone} 
            onChange={handlePhoneChange} 
            inputClass="phone-form-input phone-input"
            specialLabel=""
            required
          />
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
