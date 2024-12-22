const express = require('express');
const bodyParser = require('body-parser');
const recordRoutes = require('./routes/record');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/records', recordRoutes);

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
// const express = require('express');
// const bodyParser = require('body-parser');
// const recordRoutes = require('./routes/record');

// const app = express();
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Routes
// app.use('/', recordRoutes);

// // Khởi động server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server đang chạy tại http://localhost:${PORT}`);
// });