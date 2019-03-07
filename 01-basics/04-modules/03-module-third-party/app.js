const _ = require('lodash');

console.log(_.isString('Hello'));
console.log(_.isString(true));

var filteredArray = _.uniq(['Andres',1,'Andres',1,2,3,4]);
console.log(filteredArray);
