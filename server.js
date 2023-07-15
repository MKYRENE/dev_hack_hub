//pulling in express to create server
const express= require('express')

//creating PORT # 
const app= express();
const PORT = process.env.PORT //Heroku will provide port number dynamically

//Middleware

//Routes

// Startgin server 
app.listen(PORT, () => console.log('Server started on port %s', PORT, 10));