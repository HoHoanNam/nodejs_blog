const path = require('path'); // Import Path
const morgan = require('morgan'); // Import Morgan
const express = require('express'); // Import ExpressJS
const { engine: handlebars } = require('express-handlebars'); // Import
const route = require('./routes');

const app = express(); // Tạo instance ứng dụng
const port = 3127; // Cổng server

// Cấu hình sử dụng file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({ extname: '.hbs', defaultLayout: 'main' })); // Định nghĩa template engine
app.set('view engine', 'hbs'); // Sử dụng template engine
app.set('views', path.join(__dirname, 'resources/views')); // Cấu hình đường dẫn cho thư mục views

// Định nghĩa route
route(app);

// Khởi động server
app.listen(port, () => {
  // Thông báo server chạy
  console.log(`Example app listening on port ${port}`);
});
