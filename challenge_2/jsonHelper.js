var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);



exports.HandleChildren = (json) => {
  var values = [];
  if (!json.hasOwnProperty("children")) {
    values.push(json);
    return values;
  } else {

    var recurse = function (node) {
      if (!node.children) {
        return;
      } else {
        values.push(node);
        for (var i = 0; i < node.children.length; i++) {        
          recurse(node.children[i]);
        }
      }
    }
    recurse(json);
    values.forEach((ele) => {
      if (ele.children) {
        delete ele.children;
      }
    });
  }
  return values;
}
