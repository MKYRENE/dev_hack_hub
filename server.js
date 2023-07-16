//PULLING EXPRESS TO CREATE SERVER 
const express= require('express')

//CREATING PORT NO./ 
const app= express();
const PORT = process.env.PORT || 3333; //Heroku will provide port number dynamically

//MIDDLEWARE 
// OPENING SERVER CHANNEL SHARE ANYTHING AT THE ROOT LEVEL.
app.use(express.static('./public'))
// OPENING JSON CHANNEL (THIS WILL ALLOW JSON TO PASS THROUGH)
app.use(express.json())



//ROUTS





// SERVER BOOT UP 
app.listen(PORT, () => console.log('Server started on port %s', PORT));