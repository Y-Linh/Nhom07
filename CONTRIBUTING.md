# Hướng Dẫn Đóng Góp vào Dự Án

Xin chào! Cảm ơn bạn đã quan tâm đến việc đóng góp cho dự án "Ứng dụng Báo Cáo Thống Kê Dữ Liệu Kinh Doanh" của nhóm chúng tôi. 
Chúng tôi luôn chào đón những đóng góp từ cộng đồng để cải thiện chất lượng và tính năng của phần mềm.

---

## Bắt đầu như thế nào?

Quy trình khởi động rất đơn giản, giống như hầu hết các dự án Node.js khác. Bạn chỉ cần vài bước dưới đây:

1. Đảm bảo máy bạn đã cài đặt [Node.js](https://nodejs.org/en/download) (phiên bản LTS).
2. Sao chép (clone) repository về máy.
3. Cài đặt dependencies và bắt đầu phát triển.

### Cài đặt dự án

```bash
git clone https://github.com/Y-Linh/Nhom07.git
cd client
npm install
npm start

# Hướng dẫn đóng góp lần đầu
Nếu đây là lần đầu bạn đóng góp cho một dự án mã nguồn mở, bạn có thể làm theo các bước đơn giản sau:

1.Fork dự án này bằng cách nhấn nút Fork ở góc phải trên cùng của GitHub.
2.Clone phiên bản fork về máy:
git clone https://github.com/<your-username>/Nhom07.git
3.Tạo nhánh mới:
git switch -c feature/ten-cua-ban
4. Chỉnh sửa mã, ví dụ: thêm tên bạn vào CONTRIBUTORS.md
5. Commit thay đổi:
git add .
git commit -m "Thêm tên tôi vào contributors"
6. Push lên GitHub:
git push -u origin feature/ten-cua-ban
7. Tạo Pull Request (PR) từ GitHub để nhóm review và merge.

# Cách gửi đóng góp chính thức
Trước khi gửi Pull Request (PR), bạn cần chắc chắn rằng mã của bạn tuân thủ đúng quy định và vượt qua tất cả các kiểm tra.

Các lệnh cần chạy:
# Format tự động mã nguồn (có thể chỉnh sửa tệp của bạn)
npm run format

# Kiểm tra lint (có thể chỉnh sửa tệp của bạn)
npm run lint

# Kiểm tra lỗi type, CSS không dùng, v.v.
npm run check

# Chạy unit test
npm test

# Build dự án
npm run build

# Chạy tất cả kiểm tra và chuẩn bị sẵn sàng để deploy
npm run all

# Chạy production build tại local
npm run host

# Tạo báo cáo độ phủ mã
npm run test:coverage

# Kiểm soát kích thước thư viện (npm bloat)
Chúng tôi đặt giới hạn cho thư mục /node_modules không vượt quá 256 MB sau khi chạy npm install.

Kiểm tra kích thước:
npm run test:size

Thiết lập biến môi trường .env
Nếu bạn chỉ muốn test mà không cần deploy thật, chỉ cần sao chép .env.example thành .env rồi khai báo biến cần thiết:


Lưu ý: Không bao giờ commit các thông tin nhạy cảm như token, mật khẩu,... vào Git. Luôn giữ chúng trong các file .env và đảm bảo .env đã nằm trong .gitignore.