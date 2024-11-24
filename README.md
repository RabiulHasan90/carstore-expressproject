iniitialize for project 
--> npm init -y
install mongoose express dotenv typescript cors
typescript initialize
install eslient and prettier
customizing them
project running test
then start woprking process of project 
conecting with mongoose 
for projct choose a model 
like MVC
--------------------
for post 
like this data 
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2022,
  "price": 30000,
  "category": "Sedan",
  "description": "A reliable and fuel-efficient mid-size sedan.",
  "quantity": 10,
  "inStock": true
}
and for delete 
api/cars/carID
for update 
api/cars/carID



for orders [api/orders] -- post
{
  "email": "customer@example.com",
  "car": "64f7b2c1e7f1f2c123456789",
  "quantity": 2
}
for successfully messege
{
  "message": "Order created successfully",
  "success": true,
  "data": {
    "_id": "651a0bd3c7f46d0123456789",
    "email": "customer@example.com",
    "car": "64f7b2c1e7f1f2c123456789",
    "quantity": 2,
    "totalPrice": 40000, // Assuming the car price is 20000
    "createdAt": "2024-11-23T10:00:00.000Z",
    "updatedAt": "2024-11-23T10:00:00.000Z"
  }
}




updaterd backend automatically price 
the backend code is 
ordercontroller file
total price
const totalPrice = car.price * quantity;

