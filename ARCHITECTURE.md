# ARCHITECTURE.md

## Tổng quan

Dự án "Ứng dụng Báo Cáo Thống Kê Dữ Liệu Kinh Doanh" là một hệ thống web giúp người quản lý theo dõi hiệu suất kinh doanh thông qua các bảng dữ liệu và biểu đồ. Ứng dụng được xây dựng với kiến trúc *MERN Stack*:

- MongoDB – Cơ sở dữ liệu NoSQL.
- Express.js – Framework backend cho Node.js.
- React.js – Giao diện người dùng hiện đại.
- Node.js – Nền tảng phía server.

---

## Cấu trúc thư mục chính

```bash
STATISTICAL WEB/
├── client/              # Frontend ReactJS
│   ├── public/          
│   └── src/
│       ├── components/  # Các thành phần giao diện (Home, Login, etc.)
│          ├── Home.js/       
│          ├── Login.js/    
│       ├── App.js      
│       └── index.js     
├── server/                      
│   └── server.js                 
├── .gitignore
├── LICENSE.md
├── README.md
├── CONTRIBUTING.md
├── CONTRIBUTORS.md
└── ARCHITECTURE.md

---

```
## Flow dữ liệu cơ bản

- Người dùng đăng nhập vào ứng dụng qua giao diện React.

- Giao diện React gọi API qua Axios tới backend Node.js/Express.

- Backend xử lý yêu cầu và truy vấn MongoDB để lấy hoặc ghi dữ liệu.

- Kết quả trả về dưới dạng JSON → hiển thị lên biểu đồ/bảng trong React.

## Công cụ hỗ trợ

- npm – Trình quản lý gói cho Node/React.

- Mongoose – dùng để làm việc với MongoDB.

- React Router DOM – Điều hướng trong frontend.

- dotenv – Quản lý biến môi trường (.env).

## Mục tiêu kiến trúc

Tách biệt frontend/backend rõ ràng → dễ bảo trì & triển khai.

Tuân thủ nguyên tắc DRY 

Mở rộng được trong tương lai (thêm tính năng phân quyền, dashboard nâng cao, quản trị nhiều user...).

