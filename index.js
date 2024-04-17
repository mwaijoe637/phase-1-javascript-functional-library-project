// Function: myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  
  // Function: myMap
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
      }
    }
    return result;
  }
  
  // Function: myReduce
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        startIdx = 1;
      } else {
        const values = Object.values(collection);
        acc = values[0];
        startIdx = 1;
      }
    }
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else {
      const values = Object.values(collection);
      for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
      }
    }
    return acc;
  }
  
  // Function: myFind
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i];
        }
      }
    }
    return undefined;
  }
  
  // Function: myFilter
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          result.push(values[i]);
        }
      }
    }
    return result;
  }
  
  // Function: mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Function: myFirst
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // Function: myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
  }
  
  // Function: myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Function: myValues
  function myValues(object) {
    return Object.values(object);
  }
  