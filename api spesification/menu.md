# Menu API Spec


## Search Contact API

Endpoint : GET /api/cari

Endpoint : GET /api-public/cari (Tidak Perlu Login)

Headers :
- Authorization : token

Query params :
- name : Search by name, using like, optional
- category : Search by category using like, optional

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
        "image": "https://i.ibb.co/yVPSdtY/e80edf41a158.png"
    },
    {
        "id": 2,
        "name": "Sprinkles Love pizza",
        "description": "This is our special menu, apart from its very artistic shape and the taste combined with cheese and tomatoes is something interesting.",
        "price": "200000",
        "stok": "50",
        "category": "Popular Dishes",
        "image": "https://i.ibb.co/T87jDgM/222df3c08452.png"
    }
}
```

Response Body Error :

```json
{
  "errors": "Menu already exists"
}
```

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
        "image": "https://i.ibb.co/yVPSdtY/e80edf41a158.png"
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

Endpoint : GET /api-public/menu (Tidak perlu login)

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
        "image": "https://i.ibb.co/yVPSdtY/e80edf41a158.png"
    },
    {
        "id": 2,
        "name": "Sprinkles Love pizza",
        "description": "This is our special menu, apart from its very artistic shape and the taste combined with cheese and tomatoes is something interesting.",
        "price": "200000",
        "stok": "50",
        "category": "Popular Dishes",
        "image": "https://i.ibb.co/T87jDgM/222df3c08452.png"
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
        "image": "https://i.ibb.co/yVPSdtY/e80edf41a158.png"
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

Endpoint : GET /api-public/menu/:id (tidak perlu login)

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
        "image": "https://i.ibb.co/yVPSdtY/e80edf41a158.png"
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