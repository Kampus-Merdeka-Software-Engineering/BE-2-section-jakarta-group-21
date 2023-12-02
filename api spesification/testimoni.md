# Menu API Spec

## Create Testimoni API

Endpoint : POST /api/testimoni

Headers :
- Authorization : token

Query form-data :
- name: Anthony David Alexander
- description: The sensation of vegetable pizza for me is amazing and very suitable for a healthy lifestyle.
- image: image1.jpg
- rating: lima


Response Body Success :

```json
{
  "data": {
        "id": 1,
        "name": "Anthony David Alexander",
        "description": "The sensation of vegetable pizza for me is amazing and very suitable for a healthy lifestyle.",
        "image": "https://i.ibb.co/9yydPhK/26aab4237490.png"
        "rating": "Lima",
    }
}
```

Response Body Error : 

```json
{
  "errors": "Testimoni already exists"
}
```

## Get Testimoni API

Endpoint : GET /api/testimoni

Endpoint : GET /api-public/testimoni (Tidak perlu login)

Headers :
- Authorization : token

Response Body Success :

```json
{
  "data": {
        "id": 1,
        "name": "Anthony David Alexander",
        "description": "The sensation of vegetable pizza for me is amazing and very suitable for a healthy lifestyle.",
        "image": "https://i.ibb.co/9yydPhK/26aab4237490.png"
        "rating": "Lima",
    },
    {
        "id": 2,
        "name": "Audrey Carol",
        "description": "The taste is very good and so is the service. I ordered a classic pizza which was amazing. My sister had amazing pasta.",
        "image": "https://i.ibb.co/fqNNk48/7995bef42cd4.png"
        "rating": "Empat",
    },
    
}
```

Response Body Error :

```json
{
  "errors" : "Testimoni is not found"
}
```


## Update Testimoni API

Endpoint : PUT /api/testimoni/:id

Headers :
- Authorization : token

Query form-data :
- name: Anthony David Alexander
- description: The sensation of vegetable pizza for me is amazing and very suitable for a healthy lifestyle.
- image: image1.jpg
- rating: lima


Response Body Success :

```json
{
  "data": {
        "id": 1,
        "name": "Anthony David Alexander",
        "description": "The sensation of vegetable pizza for me is amazing and very suitable for a healthy lifestyle.",
        "image": "https://i.ibb.co/9yydPhK/26aab4237490.png"
        "rating": "Lima",
    }
}
```

Response Body Error : 

```json
{
  "errors": "Testimoni is not found"
}
```

## Remove Testimoni API

Endpoint : DELETE /api/testimoni/:id

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
  "errors" : "Testimoni is not found"
}
```