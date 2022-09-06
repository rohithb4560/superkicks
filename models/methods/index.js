const express = require('express');
const mongoose = require('mongoose');
const { superkick } = require('..');

module.exports.getAllProducts = filterQuery=>{
    return superkick.find(filterQuery).lean().exec()
}

module.exports.createProducts = data =>{
    return superkick.create(data)
}