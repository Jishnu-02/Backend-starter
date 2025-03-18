const express = require('express')
const app = express()
const port = 9999
const InventoryRoutes = require('./routes/inventoryRoutes')
const connectDB = require('./config/db')
app.use(express.json())

app.use('/', InventoryRoutes)
connectDB()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});