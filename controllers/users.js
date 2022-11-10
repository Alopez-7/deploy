const express = require('express');
const router = express.Router();
const sequelize = require('../config/db');
const Users = require('../models/users')
// Get all users
async function findUsers(req, res){
  return await Users.findAndCountAll()
    .then(data => res.json(data))
    .catch(err => res.json({ message: 'Error', data: err }))
};

module.exports = findUsers;