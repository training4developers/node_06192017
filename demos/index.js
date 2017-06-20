'use strict';

try {
  var t = 2;

  setTimeout(() => {
    //throw Error('i have a blockage');
    console.log('all done!', t);
  }, 0);

  console.log('made it here');

} catch(err) {
  console.log('caught the error');
}
