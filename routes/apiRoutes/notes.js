const fs = require("fs");
const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
    let notes = fs.readFileSync("db/db.json");
    notes = JSON.parse(notes);
    res.json(notes);
});

router.post("/notes", (req, res) => {
    let notes = fs.readFileSync("db/db.json");
    notes = JSON.parse(notes);
    req.body.id = notes.length.toString();
    const newNote = req.body;
    notes.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, "../../db/db.json"),
        JSON.stringify(notes, null, 2)
    );

    res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
    let notes = fs.readFileSync("db/db.json");
    notes = JSON.parse(notes);
    let id = req.params.id;
    const filteredNotes = notes.filter(note => note.id !== id);

    fs.writeFileSync(
        "db/db.json",
        JSON.stringify(filteredNotes, null, 2)
    );

    res.send("Success");
});

module.exports = router;