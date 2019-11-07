const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/rate_my_cakes', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
})