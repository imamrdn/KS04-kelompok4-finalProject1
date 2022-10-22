# KS04-kelompok4-finalProject1

Aplikasi Reflection yang dimana aplikasi ini digunakan untuk mencatat dan mengukur target-target pencapaian seseorang.

# Installation

1.  Clone repository
2.  Masuk direktory hasil clone 
3.  Jalankan terminal lalu `npm install` untuk melakukan instalasi module yang dibutuhkan 
4.  Buka file *config.json* pada direktory **config** lalu sesuaikan 
5.  Jalankan `npm run prepareDb` untuk membuat database 
6.  Lalu `npm start` untuk menjalankan server

# Usage

- Register
    
    ```javascript
    //method POST 
    /api/v1/users/register
    ```
    
- Login
    
    ```js
    //method POST 
    /api/v1/users/login
    ```
    
- Get all Reflections
    
    ```js
    //method GET 
    /api/v1/reflections
    ```
    
- Create Reflection
    
    ```js
    //method POST 
    /api/v1/reflections
    ```
    
- Update Reflection
    
    ```js
    //method PUT 
    /api/v1/reflection/:id
    ```
    
- Delete Reflection
    
    ```js
    //method DELETE 
    /api/v1/reflections/:id
    ```
