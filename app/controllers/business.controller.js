const db = require("../models");
const Business = db.businesses;

// Create and Save a new Star Rating
exports.create = (req, res) => {

    const business = new Business({
        title: req.body.title,
        averageStarRating: req.body.averageStarRating,
      });
    
      // Save Tutorial in the database
      business
        .save(business)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Average Star Rating.",
          });
        });
};

// Retrieve all Business from the database.
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Business.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving businesses."
        });
      });
  };

// Find a single Business with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Business.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Business with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Business with id=" + id });
      });
  };

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