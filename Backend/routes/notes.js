const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require("../middleware/fetchUser")
const Note = require("../models/Note")
router.get('/fetchallNotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id })
    res.json(notes);
})

router.post('/addNote', fetchuser, [

    body('title').isLength({ min: 5 }),
    body('description').isLength({ min: 15 }),
], async (req, res) => {
    const error = validationResult(req);
    if (!error) {
        res.status(400).json({ error: error.array() })
    }
    try {
        const { title, description, tag } = req.body;

        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const result = await note.save()
        res.json(result)
    }
    catch (error) {
        res.status(500).json({ error: "Some internal server error" })
    }
})
router.put('/updateNote/:id', fetchuser, async (req, res) => {
    try {
        let userId = req.user.id;
        let note = await Note.findById(req.params.id);
        if (userId !== note.user.toString()) {
            return res.status(401).json({ Response: "in valid note id for this user" })
        }
        let newNote = { title: req.body.title, description: req.body.description, tag: req.body.tag };
        let updatenote = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        return res.json({ updatenote })
    }
    catch(e) {
        return res.json({error:e.message})
    }

})
router.delete('/deleteNote/:id',fetchuser,async(req,res)=> {
    try {
        let userId = req.user.id;
        let note = await Note.findById(req.params.id);
        if(userId !== note.user.toString()) {
            return res.status(401).json({Response:"in valid note id for this user"})
        }
        let deletenote = await Note.findByIdAndDelete(req.params.id);
        return res.json({Response:deletenote})
    }catch(e) {
        return res.json({error:e.message})
    }
})
module.exports = router