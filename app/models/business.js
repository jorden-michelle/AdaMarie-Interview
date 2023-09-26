module.exports = mongoose => {
    const Business = mongoose.model(
        "business", 
        mongoose.Schema(
            {
                title: String,
                averageStarRating: Number,
            }
        )
    );
    return Business;
};