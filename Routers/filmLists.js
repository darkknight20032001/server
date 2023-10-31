const express = require('express');
const FilmLists = require('../Models/filmListsSchema');
const router = express.Router();

router.post('/filmLists', async (req, res) => {
    const { filmPreSignedUrl, uploadedBy, filmTitle, filmInfo } = req.body;
    const savedFilm = new FilmLists({ filmPreSignedUrl, uploadedBy, filmTitle, filmInfo });
    try {
        await savedFilm.save();
        return res.status(200).json({ message: "Film Uploaded successfully.", savedFilm: savedFilm });
    }
    catch (err) {
        console.log(err);
        return res.status(200).json({ message: "There is an error" });
    }

});

router.get('/filmLists', async (req, res) => {
    // const { filmPreSignedUrl, uploadedBy, filmTitle, filmInfo } = req.body;
    // const savedFilm = new FilmLists({ filmPreSignedUrl, uploadedBy, filmTitle, filmInfo });
    const shownFilm = await FilmLists.find({});
    try {
        // await savedFilm.save();
        return res.status(200).json({ message: "Film is shown in WEB-2.0 platform successfully.", shownFilm: shownFilm });
    }
    catch (err) {
        console.log(err);
        return res.status(200).json({ message: "There is an error" });
    }

});
module.exports = router;