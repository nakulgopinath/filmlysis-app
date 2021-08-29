const express = require('express')
const mongo = require('./mongo')
const cors = require('cors')
const cloudinary = require('./utils/cloudinary')

const app = express();
const port = process.env.PORT || 8080

// app.get('/api/images', async (req, res) => {
//     const { resources } = await cloudinary.search.expression('folder:HeaderImages').execute();
//     const publicIds = resources.map(file => file.public_id)
// })

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('server running')
})

const headerImageRouter = require('./routes/headerImages')
app.use('/headerimages', headerImageRouter)


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