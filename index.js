const express = require("express")
const app = express()


const indexRoute = require("./v1/routes/index.routes")
const usersRoute = require("./src/api/routes/users")
app.use(express.json())
app.use('/api/', indexRoute)
//app.use('/api/users/' , usersRoute)

app.listen(3000 , () => {
    console.log("Servidor en el puerto 3000")
})