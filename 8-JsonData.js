const jsonData = '{"book": {"name": "json", "price": 29.99, "inStock": true, "rating": null}}';

const jsonObject = JSON.parse(jsonData);

//console.log(jsonObject);


//using dot notation
const book = jsonObject.book;
console.log(book);
console.log(book.name, book.price, book.inStock, book.rating);

//using the bracket notation
const book2 = jsonObject['book'];
console.log(book2);
console.log(book["name"], book["price"], book["inStock"]);