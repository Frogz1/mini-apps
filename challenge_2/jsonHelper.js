var handleKeys = (json) => {
  var keys = Object.keys(json);

};

var handleChildren = (json) => {
  var values = [];
  values.push(json);
  var recurse = function (node) {
    if (!node.children) {
      return;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        values.push(node.children[i]);
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
  return values;
}

var sample = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [
        {
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
}
console.table(handleChildren(sample));


