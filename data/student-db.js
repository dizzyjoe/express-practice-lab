const students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 },
  ];
  
  module.exports = {
    getAll: function() {
      return students;
    }
  };