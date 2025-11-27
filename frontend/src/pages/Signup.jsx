import React, { useState } from 'react';
import API from '../services/api';

const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = 'Username is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,}$/.test(form.email)) {
      errs.email = 'Invalid email format';
    }
    if (!form.password) errs.password = 'Password is required';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      setSubmitting(true);
      await API.post('/auth/signup', form);
      alert('Signup successful — you can now login.');
      // optionally redirect to login page
    } catch (err) {
      console.error('Signup error:', err);
      alert('Signup failed: ' + (err.response?.data?.message || 'Try again later.'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Sign Up</h2>

      <div>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit" disabled={submitting}>
        {submitting ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Signup;
