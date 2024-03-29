# Project 4
This app was created by [Yu Jiapeng](https://github.com/YJP1989), [Ben Tan](https://github.com/bentan-22), and [Methavee Lu](https://github.com/methaveelu) as the fourth and final project for the course SEIF-SG-12 by General Assembly.

## How to use the app
Open this [link]() in a browser.

## E-Commerce (Weddingproducts)
A MERN stack web-based application for young couples to purchase wedding essentials to facilitate their wedding preparations e.g. wedding gown, suits, high heels etc.
Leveraged on RESTful APIs to communicate via HTTP request from the client end to perform CRUD functions such as 'add to cart', 'add new products as seller' and more.

<img width="1265" alt="image" src="https://github.com/methaveelu/E-commerce-website-wedding-products/assets/110245885/df26e8aa-c6f7-4f90-804a-6b3688b050e7">

## Description of App
### User Stories
As a user, I want to be able to:
- [x] create a personal account for using the app with an authentication token sent to my email account
- [x] securely log in to and log out from the app using my account
- [x] edit my user details (e.g. address, email)
- [x] browse products and filter them by category/type, sell best selling or featured products
- [x] search for products containing certain key words
- [x] view any special events (e.g. product on offer / special sale period)
- [x] add/remove products from my wishlist/cart and vary the quantity for each
- [x] make secure payments via credit/debit card, PayPal or cash on delivery
- [x] enter special coupon codes to get discounts on selected products
- [x] make a request for a refund if I am not satisfied with my order
- [x] track the status of my orders
- [x] check order and refund history
- [x] leave ratings/reviews for sellers/products
- [x] communicate with sellers via chat
- [x] navigate to a FAQ page if I have any question
- [x] subscribe to the website for more news, events and offers

### Seller Stories
As a seller, I want to be able to:
- [x] create a personal account for using the app with an authentication token sent to my email account
- [x] securely log in to and log out from the app using my account
- [x] edit my details (e.g. address, email)
- [x] remove/edit orders made by users for my products, including changing the status of the order (e.g. processing, on the way, delivered, refund success)
- [x] create a new product / edit details of any existing product
- [x] create a special event for a product and vary its details (e.g. on offer period)
- [x] create a special coupon code for users to get a discount on selected products
- [x] communicate with users via chat
- [x] check my current balance (e.g. net earnings from all orders) and withdraw from the balance to my bank account

## Wireframes
*Seller Dashboard Page
<img width="868" alt="image" src="https://github.com/methaveelu/E-commerce-website-wedding-products/assets/110245885/6e0bdfc7-494d-45bd-87ab-8dc21018eb9f">

*Best Selling Products Page
<img width="899" alt="image" src="https://github.com/methaveelu/E-commerce-website-wedding-products/assets/110245885/ee037598-5b4c-4ac7-9c58-e974ddf1b6b7">

## Technologies used
### Frontend
* react
* react-router-dom
* axios
* react-icons, react-toastify
* redux, react-redux, redux-thunk, redux-toolkit
* material-ui core, datagrid
* timeago
* country-state-city
* stripe
* socket.io-client
* tailwindcss

### Backend
* express
* mongoose, mongodb
* dotenv
* cors
* jsonwebtoken
* nodemailer
* path
* stripe
* cookie-parser
* bcryptjs
* connect-multiparty
* multer

| CRUD | Method | Endpoint |  
| -------- | -------- | -------- |
|  C,R  |  POST, GET  |  "/api/v2/coupon"  |    
|  C,R,D  |  POST, GET, DELETE  |  "/api/v2/event"  |    
|  C,R,U  |  POST, GET, PUT  |  "/api/v2/order"  |    
|  C,R  |  POST, GET  |  "/api/v2/payment"  |    
|  C,R,U,D  |  POST, GET, DELETE, PUT  |  "/api/v2/product"  |    
|  C,R,U,D  |  POST, GET, DELETE, PUT  |  "/api/v2/shop"  |    
|  C,R,U,D  |  POST, GET, DELETE, PUT  |  "/api/v2/user"  |    
|  C,R,U  |  POST, GET, PUT  |  "/api/v2/withdraw"  |    
|  C,R  |  POST, GET  |  "/api/v2/message"  |    
|  C,R,U  |  POST, GET, PUT  |  "/api/v2/conversation"  |    


## Challenges
* The key challenge was the transition from rendering static data to accessing of individual components' state through Redux state management library. Admittedly, the configuration of redux is much more tedious than the useContext hook. However, having read through the forums that its especially useful for larger, complex applications with multiple data sources and complex data flow, the team took on the challenge and encountered a couple of hurdles. The challenges include understanding the flow of the state changes from (Client-->Actions dispatcher-->Reducer function-->Redux Store), as well as accessing the states from the redux store and rendering the different properties of the states.


## Possible Extensions

* Debugging of stripe and paypal payment API to process payments.
