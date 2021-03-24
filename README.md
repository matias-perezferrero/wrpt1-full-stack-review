# wrpt1-full-stack-review
E-commerce full stack project

## MVP
- users should be able to find products X
- users should be able to purchase products 
- users should be able to register an account, and log in and log out. X
- users should be able to delete an account X
- users should be able to have a cart X

## ICEBOX
- utility snack bars
- ability to log in with social media or 3rd party accounts
- share a product with another user
- admin UI
- SMS and Email features
- order history
- recommended products based on viewed/purchased/wishlists products
- wishlist/like/favorite products
- product reviews and ratings

### Dependencies
- axios
- express
- massive
- express-session
- redux
- react-redux
- redux-promise-middleware
- redux-devtools-extension
- react-router-dom
- react-toastify
- bcryptjs
- dotenv


## Database

### Tables

products
```SQL
   CREATE TABLE products (
    product_id  SERIAL PRIMARY KEY NOT NULL,
    category    VARCHAR(100),
    price       decimal,
    description VARCHAR(1000)
   ); 
```

product_images
```SQL
   CREATE TABLE product_images (
    product_images  SERIAL PRIMARY KEY NOT NULL,
    product_id      REFERENCES products (product_id),
    url             TEXT,
   ); 
   
```

users
```SQL
   CREATE TABLE users (
    user_id    SERIAL PRIMARY KEY NOT NULL,
    email      VARCHAR(100),
    password   VARCHAR(1000)
  ); 
   
```

## Server

### Endpoints

#### Products
- get all products => GET '/api/products'
- get specific products => POST '/api/products' 
- get specific product => GET '/api/products/:id'

#### Users
- register a user => POST '/api/register'
- login a user => POST '/api/login'
- logout a user => DELETE '/api/logout'
- delete a user => DELETE '/api/delete'

### Controllers
- usersController
- productsController

## Front-end

Wireframes and Component Tree:
https://miro.com/app/board/o9J_lY3gBWc=/
