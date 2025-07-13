const express = require('express');
const app = express();
const connectDB = require('./utils/db.connect');
const userRouter = require('./routers/user.router');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Your Server http://${process.env.HOST}:${process.env.PORT}`);
});
connectDB()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection failed:', err));