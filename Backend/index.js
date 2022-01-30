const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

//calling connectToMongo method for connecting mongoDB with express
connectToMongo();

//creating middleware
app.use(cors())
app.use(express.json())

//creating middleware for authentication
app.use('/api/auth',require("./routes/auth"));

//creating middleware for notes related task
app.use('/api/notes',require("./routes/notes"));

app.get('/',(req,res) => {
    res.send("Home page")
})
app.listen(port,()=> {
    console.log(`Listing at ${port}`);
})