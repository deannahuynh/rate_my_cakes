const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
    stars: {type: Number, required: true},
    comment: {type: String, default: ""}
}, { timestamps: true })

const CakeSchema = new mongoose.Schema({
    bakerName: {type: String, required: true, minlength: 2},
    imgUrl: {type: String, required: true, minlength: 5},
    reviews: [ReviewSchema]
}, { timestamps: true })

const Cake = mongoose.model("Cake", CakeSchema)
const Review = mongoose.model("Review", ReviewSchema)