import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">📊 Bảng Thống Kê Kinh Doanh</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Đăng xuất
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Tổng doanh thu tháng này</h2>
          <p className="text-2xl font-bold text-blue-600">₫120,000,000</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Số đơn hàng đã xử lý</h2>
          <p className="text-2xl font-bold text-green-600">320 đơn</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Khách hàng mới</h2>
          <p className="text-2xl font-bold text-yellow-600">58 người</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">Tỉ lệ huỷ đơn</h2>
          <p className="text-2xl font-bold text-red-500">4.2%</p>
        </div>
      </div>
    </div>
  );
}
