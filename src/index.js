const path = require('path'); // Import Path
const morgan = require('morgan'); // Import Morgan
const express = require('express'); // Import ExpressJS
const { engine: handlebars } = require('express-handlebars'); // Import Handlebars
const app = express(); // Tạo instance ứng dụng
const port = 3127; // Cổng server

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({ extname: '.hbs' })); // Định nghĩa template engine
app.set('view engine', 'hbs'); // Sử dụng template engine
app.set('views', path.join(__dirname, 'resources/views')); // Cấu hình đường dẫn cho thư mục views

// Định nghĩa route
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

// Khởi động server
app.listen(port, () => {
  // Thông báo server chạy
  console.log(`Example app listening on port ${port}`);
});
