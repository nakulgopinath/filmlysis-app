const router = require('express').Router();
const cloudinary = require('../utils/cloudinary')

router.route('/').get(async (req, res) => {
    const { resources } = await cloudinary.search.expression('folder:HeaderImages').execute();
    console.log(resources)
    const secureUrls = resources.map(file => file.secure_url)
    res.send({ secureUrls: secureUrls })
    // console.log(resources);
    console.log(secureUrls)
})

module.exports = router;
