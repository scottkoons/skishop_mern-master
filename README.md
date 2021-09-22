#SkiShop e-commerce demo store

This is a capstone project completed for the Springboard, Software Engineering course. The purpose of this demo is to create a fully functioning shopping cart and e-commerce platform demonstrating several technology skills:

## Technology Stack
The shopping cart/e-commerce app is based upon the MERN stack and utilized the following technologies:

- React
- Redux
- Thunk
- Mongo DB (via Atlas)
- Mongoose
- Node.js
- Express.js
- API integration (Paypal)
- API development
- React Bootstrap
- JWT
- Basic route encryption via Bcrypt

## App Features

- Initial home screen displaying the latest products
- Ability to provide product ratings and review
- Homepage sliding carousel with the three latest products
- Product page pagination
- Product search bar
- Full admin section featuring:
	* Ability to edit, delete, & upgrade users to admin privileges
	* Add, edit, delete, and create new products
	* Review all orders and see each order's details
	* Mark orders as delivered
	* Full payment process via PayPal APIs
- Product details page
- User profile page that displays all user's orders
- New customer registration

This is not a fully functional online store and there are numerous security, design, and error checking enhancements that would need to be implemented before this application could be used in a real-world environment.

## Installation
After downloading project, create a .env file in the root directory.  The contents should be:

```
NODE_ENV=development
PORT=5000
MONGO_URI=*yours mondodb uri*
JWT_SECRET= 'usafa1993' 
PAYPAL_CLIENT_ID='*your PayPal client id*'
```

####Run the following dependencies:
```
npm install
cd frontend
npm install
```

```
cd backend
npm run start (starts backend server on port 5000)

cd frontend
npm run start (starts frontend on port 3000)
```
Note, both servers can be started by running ```npm run dev```

####Seed the database
To seed the database run ```npm run data:import```
To remove all data in the db, run ```npm run data:destroy```

###Default user information
Use the following information to log in with the default user.  Only the admin user has administrative privileges, but this user can make other users admins as well.

```
	name: 'Admin User',
    email: 'admin@skishop.com',
    password: 123456,
    isAdmin: true
    
    name: 'Fred Flinstone',
    email: 'fred@skishop.com',
    password: 12345

    name: 'Betty Rubble',
    email: 'betty@skishop.com',
    password: 123456
```

## Acknowledgements 
This project was created by following Brad Traversy's Udemy class, MERN eCommerce From Scratch.