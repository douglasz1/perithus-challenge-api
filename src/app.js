require('dotenv').config();

const express = require('express');
const { router } = require('./router');

const PORT = process.env['PORT'] || 7780;
const app = express();
app.use('/', router);
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`));
