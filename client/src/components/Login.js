import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/Home');
    } catch (error) {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Đăng nhập</h2>
        
        <input
          className="mb-3 w-full border px-3 py-2 rounded"
          placeholder="Tài khoản"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          className="mb-3 w-full border px-3 py-2 rounded"
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
