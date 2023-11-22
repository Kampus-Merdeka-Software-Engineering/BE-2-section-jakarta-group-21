# Menu API Spec

## Create Menu API

Endpoint : POST /api/menu

Headers :
- Authorization : token

Query form-data :
- name: Tuna Pizza and Black Olive
- description: This dreamy tuna pizza with red onions and black olives is inspired by a traditional Italian recipe. Light and delicious, this pizza is also high in protein.
- price: 189000
- stok: 50
- category: Popular Dishes
- image: menu_image.jpg


Response Body Success :

```json
{
  "data": {
        "id": 1,
        "name": "Tuna Pizza and Black Olive",
        "description": "This dreamy tuna pizza with red onions and black olives is inspired by a traditional Italian recipe. Light and delicious, this pizza is also high in protein.",
        "price": "189000",
        "stok": "50",
        "category": "Popular Dishes",
        "image": "1700585005428.png"
    }
}
```

Response Body Error : 

```json
{
  "errors": "Menu already exists"
}
```

## Get Menu API

Endpoint : GET /api/menu

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : {
        "id": 1,
        "name": "Tuna Pizza and Black Olive",
        "description": "This dreamy tuna pizza with red onions and black olives is inspired by a traditional Italian recipe. Light and delicious, this pizza is also high in protein.",
        "price": "189000",
        "stok": "50",
        "category": "Popular Dishes",
        "image": "1700585005428.png"
    },
    {
        "id": 2,
        "name": "Sprinkles Love pizza",
        "description": "This is our special menu, apart from its very artistic shape and the taste combined with cheese and tomatoes is something interesting.",
        "price": "200000",
        "stok": "50",
        "category": "Popular Dishes",
        "image": "1700585357517.png"
    }
}
```

Response Body Error :

```json
{
  "errors" : "Menu is not found"
}
```


## Update Menu API

Endpoint : PUT /api/menu/:id

Headers :
- Authorization : token

Query form-data :
- name: Tuna Pizza and Black Olive
- description: This dreamy tuna pizza with red onions and black olives is inspired by a traditional Italian recipe. Light and delicious, this pizza is also high in protein.
- price: 189000
- stok: 50
- category: Popular Dishes
- image: menu_image.jpg


Response Body Success :

```json
{
  "data": {
        "id": 1,
        "name": "Tuna Pizza and Black Olive",
        "description": "This dreamy tuna pizza with red onions and black olives is inspired by a traditional Italian recipe. Light and delicious, this pizza is also high in protein.",
        "price": "189000",
        "stok": "50",
        "category": "Popular Dishes",
        "image": "1700585005428.png"
    }
}
```

Response Body Error : 

```json
{
  "errors": "Menu is not found"
}
```

## Get Menu API By Id

Endpoint : GET /api/menu/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : {
        "id": 1,
        "name": "Tuna Pizza and Black Olive",
        "description": "This dreamy tuna pizza with red onions and black olives is inspired by a traditional Italian recipe. Light and delicious, this pizza is also high in protein.",
        "price": "189000",
        "stok": "50",
        "category": "Popular Dishes",
        "image": "1700585005428.png"
    }
}
```

Response Body Error :

```json
{
  "errors" : "Menu is not found"
}
```


## Remove Menu API

Endpoint : DELETE /api/menu/:id

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data" : "OK"
}
```

Response Body Error :

```json
{
  "errors" : "Menu is not found"
}
```