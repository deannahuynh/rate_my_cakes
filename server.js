const express = require("express")
const app = express();


app.use(express.json());

require('./server/config/mongoose.js')
require('./server/models/cake.js') // can remove this after adding dirsync in mongoose.js
require('./server/config/routes.js')(app)

app.use(express.static(__dirname + '/public/dist/public'))

app.listen(8888)