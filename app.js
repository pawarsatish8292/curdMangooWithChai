const express = require('express');
const { config } = require("./config/configdb");
const app = express();
const blogRouter = require("./routes/BlogRoutes");

//middleware
app.use(express.json());
const port = 3001;
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://satishpawar:satishpawar@cluster0.rmit4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to db")
    app.listen(port, function () {
        console.log("Server is listening at port:" + port);
    });
}).catch((err) => {
    console.log(err)
});
app.use("/api/blogs", blogRouter);

module.exports = app;