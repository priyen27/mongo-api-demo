const express = require('express');

const router = express.Router();

const dataRouter = require('./data.routes');
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');

router.use('/data', dataRouter);
router.use('/auth', authRouter);
router.use('/user', userRouter);

module.exports = router;