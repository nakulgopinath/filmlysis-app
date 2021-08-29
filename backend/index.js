const express = require('express')
const mongo = require('./mongo')

const app = express();
const port = process.env.PORT || 8080

const connectToMongoDB = async () => {
    await mongo().then(mongoose => {
        try {
            console.log('connected to db')
        }
        finally {
            mongoose.connection.close()
        }
    })
}

app.listen(port, console.log('Server started at', port))
connectToMongoDB();