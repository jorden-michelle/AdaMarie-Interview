const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//parse requests of content-type
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//simpe route
app.get("/", (req, res) => {
    res.json({ message: "Application Running"})
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. `)
});
