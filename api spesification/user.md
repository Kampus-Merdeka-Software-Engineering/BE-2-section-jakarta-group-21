# User API Spec

## Register User API

Endpoint :  POST /api-public/register 

Request Body :

```json
{
  "email" : "abdultalif@gmail.com",
  "password" : "12345",
  "name" : "Abdul Talif Parinduri",
  "no_telp" : "08123456789"
}
```

Response Body Success :

```json
{
  "data" : {
    "email" : "abdultalif@gmail.com",
    "name" : "Abdul Talif Parinduri",
    "no_telp" : "08123456789"
  }
}
```

Response Body Error : 

```json
{
  "errors" : "Email already registered"
}
```


## Login User API

Endpoint : POST /api-public/login

Request Body :

```json
{
  "email" : "abdultalif@gmail.com",
  "password" : "12345"
}
```

Response Body Success : 

```json
{
  "data" : {
    "token" : "unique-token"
  }
}
```

Response Body Error :

```json
{
  "errors" : "Email or password wrong"
}
```

## Autentikasi User API

Endpoint : GET /api/users/current

Headers :
- Authorization : token

Response Body Success:

```json
{
  "data" : {
    "email" : "abdultalif@gmail.com",
    "name" : "Abdul Talif Parinduri"
  }
}
```

Response Body Error : 

```json
{
  "errors" : "Unauthorized"
}
```


## Logout User API

Endpoint : DELETE /api/users/logout

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
  "errors" : "Unauthorized"
}
```