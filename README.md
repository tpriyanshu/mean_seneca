# mean_seneca

## Prerequisites
1. Nodemon (global installation)
2. MongoDB server (running state)

## Commands to run project
1. Run `npm install` in all the three folders
2. Start angular project by `ng serve` in angular project directory
3. Start expressapp by `npm start` in expressapp directory
4. Start microservices using nodemon as `nodemon service_name.js` in respective folder
## Users collection format
Add following data in below format in users collection
```json
{ "name" : "test1", "username" : "test1", "password" : "Hello1234" }
{ "name" : "test", "username" : "test", "password" : "Hello1234" }
```
## Products collection format
Add following data in below format in products collection
```json
{ "_id" : 1, "name" : "Full Sleeves", "price" : 695, "category" : "Formal" }
{ "_id" : 2, "name" : "Printed Shirt", "price" : 975, "category" : "Casual" }
{ "_id" : 3, "name" : "Floral Kurta", "price" : 1999, "category" : "Party" }
{ "_id" : 4, "name" : "Blue Blazer", "price" : 2499, "category" : "Formal" }
{ "_id" : 5, "name" : "Jasmine Floral", "category" : "Party", "price" : 1232 }
{ "_id" : 6, "category" : "Casual", "name" : "Laural Phoenix", "price" : 1000 }
{ "_id" : 8, "category" : "Party", "name" : "Jasmine Flower", "price" : 2033 }
{ "_id" : 9, "category" : "Casual", "name" : "Mera Kurta", "price" : 1245 }
{ "_id" : 10, "category" : "Formal", "name" : "Ultra Pyjamas", "price" : 850 }
{ "_id" : 11, "category" : "Formal", "name" : "Blue Shirts", "price" : 1100 }
{ "_id" : 12, "category" : "Party", "name" : "Blue Jeans", "price" : 2345 }
```