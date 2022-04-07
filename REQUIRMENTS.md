# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

# API Endpoints
## For APIs to run correctly run them in the following sequence
* Users Endpoints
* Product Endpoints
* Orders Endpoint
* Dashboard Endpoint

### Products
* Index `'/api/products [GET]'`
* Show `'/api/products/:id [GET]'`
* Create [token required] `'/api/createproduct [POST]'`
Json Body 
{
    "name":"string",
    "price":number,
    "category":"string"
}

### Dashboard
* [OPTIONAL] Top 5 most popular products `'/api/dashboard/popular [GET]'`

### Users
* Index [token required] `'/users [GET]'`
* Show [token required] `'/users/:id [GET] '`
* Create N[token required] `'/createuser [POST]'`
Json Body
{
    "firstname":"string",
    "lastname":"string",
    "password_digest":"string"
}

### Orders
* Current Order by user (args: user id)[token required] `'/api/orders/:id [GET] '`
* [Added] Create Order [token required] `'/api/createorders [POST]'`
Json Body
{
    "status":"string",
    "user_id":number
}
* [Added] Index [token required] `'/api/orders [Get]'`
* [Added] Add Product to Order [token required] `'/api/orders/:id/products [POST]'`
Json Body
{
    "product_id":number,
    "quantity":number
}



### Data Shapes
## Product
* id
* name
* price
* Table Schema
    * id (integer)
    * name character varying(100))
    * price (integer)
    * category (character varying(50))


## User
* id
* firstName
* lastName
* password
* Table Schema
    *  id (integer)
    *  firstname (character varying(100))
    *  lastname (character varying(100))
    *  password_digest (character varying(200))

## Orders
* id
* user_id
* status of order (active or complete)
* Table Schema
    *   id (integer)
    *   user_id (bigint)
    *   status (character varying(100))
 
## [Added] order_products
* id
* quantity
* order_id
* product_id
* Table Schema
    *   id (integer)
    *   quantity (integer)
    *   order_id (bigint)
    *   product_id (bigint)
