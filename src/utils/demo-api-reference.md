#Resources
API: https://dummyjson.com/
https://dummyjson.com/docs
Following resources are available which you can access via our REST API.

/products	100 products
/carts	20 carts
/users	100 users
/posts	150 posts
/comments	340 comments
/image	Generate images on the fly
/quotes	100 quotes
/todos	150 todos
/http	Mock HTTP Code Response
/auth	to get auth token

Note: by default you will get 30 results and the total count, you can pass "skip" & "limit" query string to get more results.
For example: /posts?skip=5&limit=10

Routes
All HTTP methods are supported. You can use http or https for your requests.

GET	/products	// get all products
GET	/products/1	// get single product
GET	/products/search?q=Laptop	// search products
GET	/products/categories	// get product categories
GET	/products/category/smartphones	// get products of a category
POST	/products/add	// add a product
PUT	/products/1	// update a product
PATCH	/products/1	// update a product
DELETE	/products/1	// delete a product
GET (auth)	/auth/products	// get products with auth token