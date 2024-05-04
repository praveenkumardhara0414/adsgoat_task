const data = [
    { id: 'user1', age: 25 },
    { id: 'user2', age: 30 },
    { id: 'user1', age: 35 },
    { id: 'user3', age: 28 },
    { id: 'user2', age: 40 },
  ];
  
  const aggregatedAges = {};
  
  data.forEach(item => {
    const { id, age } = item;
    
    if (aggregatedAges[id]) {
      aggregatedAges[id] += age;
    } else {
      aggregatedAges[id] = age;
    }
  });
  
  const result = Object.keys(aggregatedAges).map(id => ({ id, age: aggregatedAges[id] }));
  
  console.log(result);