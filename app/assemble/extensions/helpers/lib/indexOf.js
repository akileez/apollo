module.exports = function(arr, find) {
  for(var i = 0, j = arr.length; i < j; i++) {
    if (arr[i] === find) {
      return i;
    }
  }
  return -1;
}