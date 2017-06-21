'use strict';

const express = require('express');

const createRestRouter = db => {

  const restRouter = express.Router();

  restRouter.route('/')
    .get((req, res) => {
      db.all().then(items => res.json(items));
    })
    .post((req, res) => {
      db.insert(req.body).then(item => res.json(item));
    });

  restRouter.route('/:itemId')
    .get((req, res) => {
      db.one(Number(req.params.itemId)).then(item => res.json(item));
    });
  // task 1: implement put operation
  // task 2: implement delete operation

  return restRouter;
};


module.exports = createRestRouter;
