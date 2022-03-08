const express = require('express')
const app  = express();
const cors = require('cors')
const PORT = 8080 || process.env.PORT 
const dbConnect = require('./db')
const dashboardRoute = require('./Routes/Dashboard')



dbConnect();

app.use(cors())
app.use(express.json())
app.use('/v1/api' , dashboardRoute)

app.listen(PORT , ()=>{
    console.log(`Server is running at Port ${PORT}`)
})
