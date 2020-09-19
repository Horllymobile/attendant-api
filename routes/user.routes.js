const express = require('express');
const { getAllUsers, addUser } = require('./../controllers/users');

const router = express.Router();


router.post('/users',addUser);

router.get('/users',getAllUsers);


module.exports = router