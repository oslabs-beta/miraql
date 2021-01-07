const testData = {
  books: ['author', 'name', 'title'],
  authors: ['id', 'name'],
};

const conversion = (cache) => {
  const output = [];

  for (const key in cache) {
    const newObj = {};
    const fields = cache[key];
    newObj.name = key;
    newObj.children = fields.map((el) => {
      return { name: el };
    });
    output.push(newObj);
  }
  return output;
};

console.log(conversion(testData));
