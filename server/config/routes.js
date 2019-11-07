const cakeController = require('./../controllers/cakes.js')

module.exports = (app) => {
    app.get('/cakes', cakeController.index)
    app.post('/cakes', cakeController.createCake)
    app.post('/reviews/:cakeId', cakeController.createReview)
}