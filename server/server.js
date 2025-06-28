const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));

// ===== KẾT NỐI DATABASE =====
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// ===== MODEL USER =====
const User = mongoose.model('User', new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
}));

// ===== LOGIN =====
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ message: 'Tài khoản không tồn tại' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Sai mật khẩu' });

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '30m' });
  res.json({ token });
});

// ===== TẠO USER MẪU (admin / 123456) - chạy 1 lần rồi xoá =====
app.get('/api/create-default-user', async (req, res) => {
  const existing = await User.findOne({ username: 'admin' });
  if (existing) return res.send('User admin đã tồn tại');

  const hashed = await bcrypt.hash('123456', 10);
  await new User({ username: 'admin', password: hashed }).save();

  res.send('✅ User admin / 123456 đã được tạo');
});

// ===== START SERVER =====
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server is running at http://localhost:${PORT}`));
