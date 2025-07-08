# Hướng Dẫn Đóng Góp vào Dự Án

Xin chào! Cảm ơn bạn đã quan tâm đến việc đóng góp cho dự án "Ứng dụng Báo Cáo Thống Kê Dữ Liệu Kinh Doanh" của nhóm chúng tôi. 
Chúng tôi luôn chào đón những đóng góp từ cộng đồng để cải thiện chất lượng và tính năng của phần mềm.

---

## Bắt đầu như thế nào?

Quy trình khởi động rất đơn giản, giống như hầu hết các dự án Node.js khác. Bạn chỉ cần vài bước dưới đây:

1. Đảm bảo máy bạn đã cài đặt [Node.js](https://nodejs.org/en/download) (phiên bản LTS).
2. Sao chép (clone) repository về máy.
3. Cài đặt dependencies và bắt đầu phát triển.

Trước tiên, hãy đảm bảo rằng Node.js đã được cài đặt trên máy của bạn để chạy mã của chúng tôi. Nếu bạn chưa cài đặt Node.js, hãy truy cập trang tải xuống của họ và cài đặt phiên bản được hỗ trợ dài hạn mới nhất.

Để đóng góp cho dự án này, bạn có thể bắt đầu bằng cách sao chép kho lưu trữ này vào máy của mình. Sao chép kho lưu trữ này bằng cách tải xuống trực tiếp hoặc thông qua git: git clone https://github.com/Y-Linh/Nhom07.git

Mở kho lưu trữ trong trình soạn thảo mã hoặc thiết bị đầu cuối bạn chọn và nhập npm install để cài đặt các phụ thuộc của dự án. 
### Cài đặt và chạy dự án

```bash

git clone https://github.com/Y-Linh/Nhom07.git
cd client: npm install
cd server: npm start

```
## Hướng dẫn cho người mới đóng góp lần đầu vào CONTRIBUTORS.md
Nếu đây là lần đầu bạn đóng góp cho một 
dự án mã nguồn mở, bạn có thể làm 
theo các bước đơn giản sau:

1.Fork dự án này bằng cách nhấn nút Fork ở góc phải trên cùng của GitHub.

2.Clone phiên bản fork về máy:
- git clone https://github.com/<your-username>/Nhom07.git

3.Tạo nhánh mới:
- git switch -c feature/ten-cua-ban

4.Chỉnh sửa mã vào CONTRIBUTORS.md với qui định :
   - [Ten] - nội dung

5.Commit thay đổi:
- git add CONTRIBUTORS.md
- git commit -m "(ten): ..."

6.Push lên GitHub:
- git push -u origin feature/ten-cua-ban

7.Tạo Pull Request (PR) từ GitHub.


# Cách gửi đóng góp chính thức
Trước khi xuất bản PR, bạn phải chạy npm run all để 
đảm bảo rằng bạn tuân thủ các nguyên tắc về phong 
cách của chúng tôi và vượt qua mọi kiểm tra.

## 1.Đóng góp trong issue GitHub

1.Fork dự án này bằng cách nhấn nút Fork ở góc phải trên cùng của GitHub.

2.Clone phiên bản fork về máy:
- git clone https://github.com/<your-username>/Nhom07.git

3.Đồng bộ mã nguồn: 
- Nằm ở phần 2. Cách đồng bộ

4.Kiểm tra trong issue
- Chọn issue muốn đóng góp
- Vào đọc issue ( đọc mô tả, role commit )

5.Tạo nhánh mới
- git switch -c feature/ten-cua-ban

6.Chỉnh sửa vấn đề của issue trong mã với qui định :

7.Add và Commit theo qui định trong doc issue
  - git add .
  - git commit -m "[..]: hoàn thành [tên issue]"

8.Push lên GitHub:
- git push -u origin feature/ten-cua-ban

7.Tạo Pull Request (PR) từ GitHub.
8.Quá trình PR
- Add a title: giống git commit -m "[..]: hoàn thành [tên issue]"
- Mô tả
## 2. Cách đồng bộ 
- Để thư mục gốc đến đúng với fork của mình chưa: Git remote -v
- Sẽ sinh ra fetch và push
- Kết nối đến mã nguồn mở : git remote add upstream “[link github gốc](https://github.com/Y-Linh/Nhom07.git)”

Đồng bộ code mới nhất lại lần nữa
- git pull upstream main

## 2.Các lệnh cần chạy:
Format tự động mã nguồn (có thể chỉnh sửa tệp của bạn)
- npm run format

Kiểm tra lint (có thể chỉnh sửa tệp của bạn)
- npm run lint

Kiểm tra lỗi type, CSS không dùng, v.v.
- npm run check

Chạy unit test
- npm test

Build dự án
- npm run build

Chạy tất cả kiểm tra và chuẩn bị sẵn sàng để deploy
- npm run all

Chạy production build tại local
- npm run host

## File .ENV
Thiết lập biến môi trường .env
Nếu bạn chỉ muốn test mà không cần deploy thật, 
chỉ cần sao chép .env.example thành .env rồi 
khai báo biến cần thiết:

## File .gitignore
Lưu ý: Không bao giờ commit các thông tin nhạy cảm 
như token, mật khẩu,... vào Git. 
Luôn giữ chúng trong các file .env và đảm bảo .env đã nằm trong .gitignore.