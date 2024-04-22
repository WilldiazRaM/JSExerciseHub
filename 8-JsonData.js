const jsonData = '{"book": {"name": "json", "price": 29.99, "inStock": true, "rating": null}}';

const jsonObject = JSON.parse(jsonData);

console.log(jsonObject);