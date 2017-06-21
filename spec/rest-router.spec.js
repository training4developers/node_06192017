'use strict';

const request = require('supertest');
const express = require('express');

const mockData = [
  { id: 1, name: 'test widget 1' },
  { id: 2, name: 'test widget 2' },
];

const mockDb = {
  all() { return Promise.resolve(mockData); }
};

const restRouter = require('../rest-router')(mockDb);

describe('rest-router', () => {

  let app;

  beforeEach(() => {
    app = express().use('/api/widgets', restRouter);
  });

  it('all', done => {
    
    spyOn(mockDb, 'all').and.callThrough();

    request(app)
      .get('/api/widgets')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        expect(res.body).toEqual(mockData);
        expect(mockDb.all).toHaveBeenCalled();
        done();
      });

  });

});
