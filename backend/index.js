const mongo = require('./mongo')

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

connectToMongoDB();