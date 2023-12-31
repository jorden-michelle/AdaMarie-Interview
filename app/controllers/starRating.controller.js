const db = require("../models");
const StarRating = db.starRatings;

// Create and Save a new Star Rating
exports.create = (req, res) => {
  // Create a Star Rating
  const starRating = new StarRating({
    businessId: req.body.businessId,
    starRating: req.body.starRating,
  });

  // Save Tutorial in the database
  starRating
    .save(starRating)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Star Rating.",
      });
    });
};

// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {

// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {

// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {

// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {

// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {

// };
