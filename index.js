function removeNull(data) {
 var str_data = JSON.stringify(data, function(k, obj) {
  for (var propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
    return obj
  });
  return JSON.parse(str_data)
}
module.exports.removeNull = removeNull;  