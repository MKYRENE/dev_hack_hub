//PULLING EXPRESS TO CREATE SERVER 
const express= require('express')

//CREATING PORT NO./ 
const app= express();
const PORT = process.env.PORT //Heroku will provide port number dynamically

//MIDDLEWARE 




//ROUTS





// SERVER BOOT UP 
app.listen(PORT, () => console.log('Server started on port %s', PORT, 10));