function removeNull(data) {
 return JSON.stringify(data, function(k, obj) {
  for (var propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
    return obj
  });
}
module.exports.removeNull = removeNull;  