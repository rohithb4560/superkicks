const express = require('express');
const mongoose = require('mongoose');
const { superkick } = require('..');
const {getAllProducts,createProducts } =require('../methods/index')

module.exports.getAllProduct =async (req,res)=>{
    const data =await getAllProducts(req.body)
    res.send(data)
}

module.exports.createProduct = async (req,res)=>{
    const data = await createProducts(req.body)
    res.send(data)
}