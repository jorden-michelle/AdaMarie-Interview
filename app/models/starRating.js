module.exports = mongoose => {
    const StarRating = mongoose.model(
        "star-rating", 
        mongoose.Schema(
            {
                businessId: String,
                starRating: Number,
            }
        )
    );
    return StarRating;
};