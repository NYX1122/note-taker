const apiRoutes = require("./routes/apiRoutes/notes");
const htmlRoutes = require("./routes/htmlRoutes/index");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server successful on port ${PORT}.`);
});