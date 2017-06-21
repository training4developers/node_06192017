'use strict';

describe('app', () => {

  it('demo', () => {

    expect(true).toBe(true);

  });

  it('demo async', done => {

    setTimeout(() => {

      expect(0).toBe(0);
      done();
    }, 500);

  });

});
