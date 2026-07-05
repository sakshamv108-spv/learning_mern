const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Student = require("./models/Student");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb+srv://sakshamv108:y)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.post("/add-student", async (req, res) => {

    try {

        const student = new Student({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        });

        await student.save();

        res.json({
            success: true,
            message: "Student Saved"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
