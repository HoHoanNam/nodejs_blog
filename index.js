const express = require('express'); // Import ExpressJS
const app = express(); // Tạo instance ứng dụng
const port = 3127; // Cổng server

// Route GET cho đường dẫn gốc
app.get('/', (req, res) => {
  res.send('Hello World!'); // Trả về "Hello World!"
});

// Khởi động server
app.listen(port, () => {
  // Thông báo server chạy
  console.log(`Example app listening on port ${port}`);
});
