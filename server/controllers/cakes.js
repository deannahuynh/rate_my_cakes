const mongoose = require("mongoose")
const Cake = mongoose.model('Cake')
const Review = mongoose.model('Review')

module.exports = {
    index: (req, res) => {
        Cake.find()
            .then(cakes => res.json(cakes))
            .catch(e => res.json({err: e}))
    },

    createCake: (req, res) => {
        const cake = new Cake(req.body)
        cake.save()
            .then(cake => res.json(cake))
            .catch(err => res.json(err))
    },

    createReview: (req, res) => {
        const review = new Review(req.body)
        console.log("creating a new review in server", review)
        review.save()
            .then( review => {
                console.log(req.params.cakeId)
                Cake.findByIdAndUpdate(req.params.cakeId, {
                    $push: {
                        reviews: review
                    }
                }, {new: true})
                .then((data) => res.json(data))
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}