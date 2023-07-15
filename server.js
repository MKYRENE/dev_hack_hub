//pulling in express to create server
const express= require('express')

//creating PORT # 
const app= express();
const PORT = process.env.PORT //Heroku will provide port number dynamically