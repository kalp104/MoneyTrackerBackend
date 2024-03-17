const express = require("express");
const router = require('express').Router();

const {createCategory} = require('../controller/createCategory');
const {getCategory} = require('../controller/getCategory');
const {createTransaction} = require('../controller/createTransaction')
const {getTransaction} = require('../controller/getTransaction')
const {deleteTransaction} = require("../controller/deleteTransaction");

router.get('/getCategory', getCategory);
router.get('/getTransaction', getTransaction);
router.post('/createCategory', createCategory);
router.post('/createTransaction', createTransaction);
router.delete('/deleteTransaction/:id', deleteTransaction);
module.exports=router;