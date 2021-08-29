const mangoose = require('mongoose')
const Schema = mangoose.Schema;

const headerImagesSchema = new Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: String
    }
});
module.exports = mangoose.model('HeaderImage', headerImagesSchema)